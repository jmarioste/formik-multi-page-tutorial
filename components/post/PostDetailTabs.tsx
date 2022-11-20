import React, { useMemo } from 'react'
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';
import PostContentTab from './PostContentTab';
import PostInfoTab from './PostInfoTab';
import PostSeoMetadataTab from './PostSeoMetadataTab';
import UpdatePostButton from './UpdatePostButton';

const PostDetailTabs = () => {

  const router = useRouter();
  const params = Array.isArray(router.query.slug)
    ? (router.query.slug as string[])
    : [];
  const [slug, currentTab = ""] = params;

  const tabInfo = [
    { url: `/cms/post/${slug}`, text: "PostInfo", activeMatcher: "" },
    { url: `/cms/post/${slug}/content`, text: "Content", activeMatcher: "content" },
    { url: `/cms/post/${slug}/seo`, text: "SEO Metadata", activeMatcher: "seo" }
  ]

  const TabComponent = useMemo(() => {
    switch (currentTab) {
      case "content": return <PostContentTab />;
      case "seo": return <PostSeoMetadataTab />;
      default:
        return <PostInfoTab />
    }
  }, [currentTab])
  return (
    <div>
      <div className="tabs">
        {
          tabInfo.map((tab, index) => {
            return <Link href={tab.url} key={index}>
              <a className={classNames({
                "tab tab-bordered": true,
                "tab-active": tab.activeMatcher === currentTab,
              })}>{tab.text}</a>
            </Link>
          })
        }
      </div>
      {TabComponent}
      <UpdatePostButton />
    </div>
  )
}

export default PostDetailTabs
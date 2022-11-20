import React, { useMemo } from 'react'
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';
import PostInfoTab from './PostInfoTab';
import PostSeoMetadataTab from './PostSeoMetadataTab';
import PostContentTab from './PostContentTab';
import SaveButton from './SaveButton';

const PostDetailTabs = () => {

  const router = useRouter();
  const params = Array.isArray(router.query.slug)
    ? (router.query.slug as string[])
    : [];
  const [slug, tab] = params;

  const currentTab = useMemo(() => {
    switch (tab) {
      case "content": return <PostContentTab />;
      case "seo": return <PostSeoMetadataTab />;
      default:
        return <PostInfoTab />
    }
  }, [tab])
  return (
    <div>
      <div className="tabs">
        <Link href={`/cms/post/${slug}`}>
          <a className={classNames({
            "tab tab-bordered": true,
            "tab-active": !tab,
          })}>Post Info</a>
        </Link>
        <Link href={`/cms/post/${slug}/content`}>
          <a className={classNames({
            "tab tab-bordered": true,
            "tab-active": tab === "content",
          })}>
            Content
          </a>
        </Link>
        <Link href={`/cms/post/${slug}/seo`}>
          <a className={classNames({
            "tab tab-bordered": true,
            "tab-active": tab === "seo",
          })}>
            SEO Metadata
          </a>
        </Link>
      </div>
      <div className="my-2">
        {currentTab}
      </div>
      <SaveButton />
    </div>
  )
}

export default PostDetailTabs

import { Formik } from "formik";
import React from "react";
import PostDetailTabs from "./PostDetailTabs";

const PostDetail = () => {

  return (
    <Formik initialValues={{}} onSubmit={(values) => { console.log("onSubmit", values) }}>
      <div className="container">
        <h1 className="text-2xl font-bold my-2">Update Post</h1>
        <PostDetailTabs />
      </div>
    </Formik >
  );
};

export default PostDetail;

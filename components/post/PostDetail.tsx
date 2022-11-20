import { Form, Formik } from "formik";
import React from "react";
import PostDetailTabs from "./PostDetailTabs";

const PostDetail = () => {
  const initialValues = {
    slug: "hello-world",
    headline: "Hello, world",
    content:
      "In this tutorial, you will learn about hello, world in javascript.",
    seo: {
      title: "Hello, world | React Hustle",
      description:
        "In this tutorial, you will learn about hello, world in javascript.",
    },
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, helpers) => {
        helpers.setSubmitting(true);
        console.log("onSubmit", values);

        //you should call backend api here. 
        //setTimoue to simulate api call
        setTimeout(() => {
          helpers.setSubmitting(false);
          helpers.resetForm({ values })
        }, 2000);
      }}
    >
      <Form className="container">
        <h1 className="text-2xl font-bold my-2">Update Post</h1>
        <PostDetailTabs />
      </Form>
    </Formik>
  );
};

export default PostDetail;

import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  //add state and a toggle handler

  return <div className="container h-screen grid place-content-center">
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-xl">This is a DEMO on creating multi-page forms with Formik.</h1>
      <p className="text-base-content/60">Click the button to go to the cms route</p>
      <Link href={"/cms/post/hello-world"}>
        <a className="btn btn-secondary">Go to Admin</a>
      </Link>
    </div>
  </div>
};

export default Home;

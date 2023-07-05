import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
/* import { getSortedPostsData } from "../lib/post"; */
import Link from "next/link";
import Date from "../components/Date";
import Login from "./user/login";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Login />
    </Layout>
  );
}

/* export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} */

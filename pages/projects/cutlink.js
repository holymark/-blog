import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Project: Cutlink</title>
      </Head>
      <h1>Cutlink (url shortner implementation)</h1>
    </Layout>
  );
}

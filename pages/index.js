import Head from "next/head";
import Nav from "@components/nav";
import Tables from "@components/table";
import { Button } from "@tremor/react";
import Link from "next/link";
import { GetArticles } from "./api/articles/getarticles";

// import GetArticles from "./api/articles/getarticles";

export default function Index(props) {
  const { articles } = props;
  const titles = ["id", "name", "description", "price", "tax", "edit"];
  const view = "article";

  return (
    <>
      <Head>
        <title>Centribal</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1,user-scalable=0"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Nav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <Link href="/newArticle">
          <Button variant="secondary" href={"/newArticle"}>
            Nuevo Artículo
          </Button>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <Tables items={props.articles} titles={titles} view={view} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const indexdata = await GetArticles();
  // console.log("index data", indexdata);

  return {
    props: {
      articles: indexdata || {},
    },

    revalidate: 1, // In seconds
  };
};

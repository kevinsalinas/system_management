import ArticleForm from "@components/articleForm";
import Nav from "@components/nav";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetArticle } from "pages/api/articles/getArticle";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Page() {
  // run asynchronous tasks here
  const router = useRouter();
  const t = useTranslations("Article");

  const { id } = router.query;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`http://localhost:3000/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No article data</p>;

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <h3 className="flex justify-center my-8 text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {t("edit_article")}
        </h3>
        <ArticleForm articleid={data} />
      </div>
    </>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/shared/${locale}.json`),
        ...require(`../../messages/index/${locale}.json`),
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/article/1",
      // Object variant:
      { params: { id: "1" } },
    ],
    fallback: true,
  };
}

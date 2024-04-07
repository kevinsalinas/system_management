import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1,user-scalable=0"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <div>Hola</div>
    </>
  );
}

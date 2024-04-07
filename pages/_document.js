import Document, { Html, Head, Main, NextScript } from "next/document";
// import { DeferredNextScript } from "lib/DeferredNextScript/DeferredNextScript";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href={`https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

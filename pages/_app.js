import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

import "../styles/globals.scss";

function MyApp({ Component, messages, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Madrid"
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

export default MyApp;

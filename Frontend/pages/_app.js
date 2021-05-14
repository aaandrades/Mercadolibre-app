// Global Styles
import Head from "next/head";
import "../styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Logo_ML.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

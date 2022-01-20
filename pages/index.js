import Head from "next/head";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Common Living | Shared Coliving</title>
        <meta name="description" content="Common.com Clone" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
    </div>
  );
}

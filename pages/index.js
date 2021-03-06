import Head from "next/head";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Common Living | Shared Coliving</title>
        <meta name="description" content="Common.com Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundColor: "white",
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Hero />
      </div>
    </div>
  );
}

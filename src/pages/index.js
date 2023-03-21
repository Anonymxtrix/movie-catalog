import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta
          name="description"
          content="A simple catalog that can be used to browse movies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons8-circled-play-96.png" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

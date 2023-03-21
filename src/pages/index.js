import Head from "next/head";
import data from "@/fixtures/data.js";
import Link from "next/link";

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
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((datum, index) => {
            return (
              <Link
                className="cursor-pointer"
                key={index}
                href={`/${datum.name}`}
              >
                <div className="h-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div className="mb-3">
                    <h1 className="font-bold text-xl">{datum.name}</h1>
                    <h2>{datum.genre}</h2>
                    <h3 className="text-gray-400">{datum.productionYear}</h3>
                  </div>
                  <p className="">{datum.synopsisShort}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

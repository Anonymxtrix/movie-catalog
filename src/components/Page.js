import Head from "next/head";

const Page = ({ title, children }) => {
  const pageTitle = title ? `${title} | Movies` : `Movies`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="A simple catalog that can be used to browse movies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons8-circled-play-96.png" />
      </Head>
      <main className="container mx-auto px-6">{children}</main>
    </>
  );
};

export default Page;

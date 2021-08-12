import Head from 'next/head';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SKCT - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Home Page</h1>
      </main>
    </div>
  );
}

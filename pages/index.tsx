import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luís - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Luís Ribeiro" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a Software Engineer grad @UMinho whole loves Formal Methods!" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Luís - Software Engineer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Luís - Software Engineer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Luís - Software Engineer"/>
        <meta data-rh="true" property="og:image" content="/profile.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>
    </>
  )
}

export default Home;
import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Main from "../components/Main";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eliezer Ruiz | Portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>

      <Main />

      <AboutMe />

      <Skills />

      <ContactMe />
    </div>
  );
}

import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe";
import Main from "../components/Main";
import Skill_List from "../components/Skills/Skill_List";
import ContactMe from "../components/ContactMe";
import ProjectList from "../components/Projects/ProjectList";

export default function Home() {
  return (
    <>
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
      <Skill_List />
      <ProjectList />
      <ContactMe />
    </>
  );
}

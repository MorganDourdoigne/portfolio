import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";

// Importation des composants
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

// Fonction principale de la page d'accueil
export default function Home() {
// Utilisation du Redux pour récupérer les données
  const { name } = useSelector(selectData);

// Mise à jour du titre de la page au chargement de la page d'accueil
  React.useEffect(
    function () {
      document.title = `Morgan Dourdoigne | Développeur web`;
    },
    [name]
  );

// Affichage des composants de la page d'accueil
  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}

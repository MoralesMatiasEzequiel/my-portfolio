import style from "./Home.module.css";
import React, { useState, useEffect } from "react";
import fotoPerfil from "../Images/perfil.jpg";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Skills from "../Components/Skills/Skills";
import Form from "../Components/Contact/Form";
import NavBar from "../Components/NavBar/NavBar";

const Home = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setShowNavBar(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div className={style.container}>
      {showNavBar && (
        <div style={{ display: "block", position: "fixed" }}>
          <NavBar />
        </div>
      )}
      <br />
      <br />
      <br />
      <div id="home">
        <h1 className={style.title}>
          Hola,
          <br />
          soy <span className={style.nombre}>Matías Morales.</span>
          <br />
          </h1>
          <h4 className={style.title}>Full Stack Developer</h4>  
        <img src={fotoPerfil} alt="" className={style.imgPerfil} />
      </div>
      <div>
        <button>
          <a
            href="https://wa.link/6b1tuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conectame
          </a>
        </button>
        <a
          href="https://drive.google.com/file/d/1oeMMp5Z4EcbxkYnz5vClSZqqwidIeEoE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Descargar CV</button>
        </a>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Project />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Form />
      </div>
    </div>
  );
};

export default Home;
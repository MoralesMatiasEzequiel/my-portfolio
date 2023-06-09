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
    <div className={style.container} id="home">
      {showNavBar && (
        <div style={{ display: "block", position: "fixed" }}>
          <NavBar />
        </div>
      )}
      <br />
      <br />
      <br />
      <div className={style.header}>
        <div>
          <h1 className={style.title}>
            Hola,
            <br />
            soy 
            <br />
            <span className={style.nombre}>&lt; Matías</span>
            <br />
            <span className={style.nombre}>Morales &gt;</span>
            <br />
          </h1>
          <h4 className={style.title}>Full Stack Developer</h4> 
        </div> 
        <img src={fotoPerfil} alt="" className={style.imgPerfil} />
      </div>
      <div className={style.buttons}> 
        <div className={style.containerButtons}>       
        <a
          href="https://wa.link/6b1tuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.boton}>Conectame</button>
        </a>
        </div>
        <div> 
        <a
          href="https://drive.google.com/file/d/1oeMMp5Z4EcbxkYnz5vClSZqqwidIeEoE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.boton}>Descargar CV</button>
        </a>
        </div>
      </div>
      <div id="about" className={style.containerComponents}>
        <About />
      </div>
      <div id="portfolio" className={style.containerComponents}>
        <Project />
      </div>
      <div id="skills" className={style.containerComponents}>
        <Skills />
      </div>
      <div id="contact" className={style.containerComponents}>
        <Form />
      </div>
    </div>
  );
};

export default Home;
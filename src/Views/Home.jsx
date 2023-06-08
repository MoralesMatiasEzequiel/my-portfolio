import style from "./Home.module.css";
import React, { useState, useEffect } from "react";
import fotoPerfil from "../Images/perfil.jpg";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Skills from "../Components/Skills/Skills"
import Form from "../Components/Contact/Form";
import NavBar from "../Components/NavBar/NavBar";



const Home = () => {

  const [ showNavBar, setShowNavBar ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY <= 0){
        setShowNavBar(true)
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);   
    };

  }, []);

  const handleDisplayNav = () => {
    if(showNavBar) return 'block'
    else return 'none'
  }

  return (
    <div className={style.container}>
      <div style={{display: handleDisplayNav(), position: "fixed"}}>
        <NavBar />
      </div>
      <div>
          <h1 className={style.title}>Hola, soy
              <br />
              <span className={style.nombre}>Matías Morales.</span>
              <br />
              Full Stack Developer
          </h1>
          <img src={fotoPerfil} alt="" className={style.imgPerfil}/>
      </div>   
      <div>
          <button><a href="https://wa.link/6b1tuz" target="_blank" rel="noopener noreferrer">Conectame</a></button>
          <a href="https://drive.google.com/file/d/1oeMMp5Z4EcbxkYnz5vClSZqqwidIeEoE/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Descargar CV</button></a>
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
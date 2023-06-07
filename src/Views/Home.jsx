import style from "./Home.module.css";
import React from "react";
import fotoPerfil from "../Images/perfil.jpg";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Skills from "../Components/Skills/Skills"
import Form from "../Components/Contact/Form";
import NavBar from "../Components/NavBar/NavBar";




const Home = () => {
  return (
    <div className={style.container}>
      <NavBar />
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
          <button>Conectame</button>
          <button>Descargar CV</button>
      </div>  
      <About />  
      <Project />
      <Skills />
      <Form />
    </div>
  );
};

export default Home;
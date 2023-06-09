import style from "./Project.module.css";
import imgFoodArt from "../../Images/food art.jpg";
import imgRyM from "../../Images/rym.jpg";


const Project = () => {

    const projects = [
        {
            id: 1,
            name: "★ Food Art!",
            image: imgFoodArt,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            linkApp: "https://foodartapp.vercel.app/",
            linkGitHub: "https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food",            
        },
        {
            id: 2,
            name: "★ Rick and Morty App",
            image: imgRyM,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            linkApp: "https://foodartapp.vercel.app/",
            linkGitHub: "https://github.com/MoralesMatiasEzequiel/rick_and_morty",            
        },
    ]

    return (
        <div>
            <div>
                <h1 className={style.title}>Projects</h1>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            {projects.map((project) => {
                return <div className={style.container}>
                    <img src={project.image} alt="" className={style.imgProject}/>
                    <div className={style.subContainer}>
                        <h2 className={style.nameApp}>{project.name}</h2>
                        <p className={style.paragraph}>{project.summary}</p>
                        <div className={style.containerIcons}>
                            <a 
                            href={project.linkApp} 
                            target="_blank"
                            rel="noopener noreferrer" 
                            className={style.iconos}>
                                <i class="fa-sharp fa-solid fa-globe"></i>
                                <br />
                                <span className={style.iconTitle}>Link web</span>
                            </a>
                            <a 
                            href={project.linkGitHub} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.iconos}>
                                <i class="fa-brands fa-github"></i>
                                <br/>
                                <span className={style.iconTitle}>Repositorio</span>
                            </a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project;

/*
return (
        <div>
            <div>
                <h1 className={style.title}>Projects</h1>
            </div>
            <div>
                <h2 className={style.title}>Food Art!</h2>
                <img src={imgFoodArt} alt="" className={style.imgProject}/>
                <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4 className={style.title}>Link App:</h4>
                <a href="https://foodartapp.vercel.app/">https://foodartapp.vercel.app/</a>
                <h4 className={style.title}>Link de GitHub:</h4>
                <a href="https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food">https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food</a>
            </div>
            <div>
                <h2 className={style.title}>Rick and Morty App</h2>
                <img src={imgRyM} alt="" className={style.imgProject}/>
                <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4 className={style.title}>Link App:</h4>
                <a href="https://foodartapp.vercel.app/">xxxxxxxx</a>
                <h4 className={style.title}>Link de GitHub:</h4>
                <a href="https://github.com/MoralesMatiasEzequiel/rick_and_morty">https://github.com/MoralesMatiasEzequiel/rick_and_morty</a>
            </div>
        </div>
    )
}
*/
import style from "./Project.module.css";
import imgFoodArt from "../../Images/food art.jpg";
import imgRyM from "../../Images/rym.jpg";

const Project = () => {

    const projects = [
        {
            id: 1,
            name: "Food Art!",
            image: imgFoodArt,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            linkApp: "https://foodartapp.vercel.app/",
            linkGitHub: "https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food",            
        },
        {
            id: 2,
            name: "Rick and Morty App",
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
            {projects.map((project) => {
                return <div className={style.container}>
                    <h2 className={style.title}>{project.name}</h2>
                    <img src={project.image} alt="" className={style.imgProject}/>
                    <p className={style.paragraph}>{project.summary}</p>
                    <h4 className={style.title}>Link App:</h4>
                    <a href={project.linkApp}>{project.name}</a>
                    <h4 className={style.title}>Link GitHub:</h4>
                    <a href={project.linkGitHub}>Repository</a>
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
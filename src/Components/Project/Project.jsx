import style from "./Project.module.css";
import imgFoodArt from "../../Images/food art.jpg";
import imgRyM from "../../Images/rym.jpg";

const Project = () => {

    return (
        <div>
            <div>
                <h1>Projects</h1>
            </div>
            <div>
                <h2>Food Art!</h2>
                <img src={imgFoodArt} alt="" className={style.imgProject}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4>Link App:</h4>
                <a href="https://foodartapp.vercel.app/">https://foodartapp.vercel.app/</a>
                <h4>Link de GitHub:</h4>
                <a href="https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food">https://github.com/MoralesMatiasEzequiel/Soy-Henry_PI-Food</a>
            </div>
            <div>
                <h2>Rick and Morty App</h2>
                <img src={imgRyM} alt="" className={style.imgProject}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4>Link App:</h4>
                <a href="">xxxxxxxx</a>
                <h4>Link de GitHub:</h4>
                <a href="https://github.com/MoralesMatiasEzequiel/rick_and_morty">https://github.com/MoralesMatiasEzequiel/rick_and_morty</a>
            </div>
        </div>
    )
}

export default Project;
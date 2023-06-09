import style from "./NavBar.module.css";
// import fotito from "../../Images/fotito.png";


const NavBar = () => {


    return (
            <nav className={style.navBar}>
                {/* <img src={fotito} alt="" className={style.fotito}/> */}
                <ul>
                    <a href="#home" className={style.logo}>&#123;mat&#125;</a>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">My portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    )
}

export default NavBar;


import style from "./NavBar.module.css";


const NavBar = () => {


    return (
            <div className={style.navBar}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">My portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
    )
}

export default NavBar;


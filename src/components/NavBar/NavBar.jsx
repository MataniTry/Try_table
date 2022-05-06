import React from "react";
import Nav from './NavBar.module.css'


const NavBar = () => {
    return(
    <nav className = {Nav.nav}>
        <div>
            <a className={Nav.item} href= 'src/components/NavBar/NavBar#'> Group 1 </a>
        </div>
        <div>
            <a className={Nav.item} href= 'src/components/NavBar/NavBar#'> Group 2 </a>
        </div>
        <div>
            <a className={Nav.item} href= 'src/components/NavBar/NavBar#'> Group 3 </a>
        </div>
        <div>
            <a className={Nav.item} href= 'src/components/NavBar/NavBar#'> Group 4 </a>
        </div>
    </nav>
    )
}



export default NavBar
import React from "react";
import Nav from './NavBar.module.css'
import Add_group from "./Add_group/add_group";
import Del_group from "./Delete_group/del_group";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return(
    <nav className = {Nav.nav}>
        <div className={Nav.item}>
            <NavLink to = '/group1' activeClassName = {Nav.activeLink} > Group 1 </NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to = '/group2' activeClassName = {Nav.activeLink} > Group 2 </NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to = '/group3' activeClassName = {Nav.activeLink} > Group 3 </NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to = '/group4' activeClassName = {Nav.activeLink} > Group 4 </NavLink>
        </div>
        <Add_group />
        <Del_group />
    </nav>
    )
}



export default NavBar;
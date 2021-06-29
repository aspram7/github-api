import React from "react";
import NavLink from '../../components/NavLink/NavLink';
import "./Navbar.css"


const headerLink: { to: string, title: string }[]  = [
  { to: "/", title: "Users" },
  { to: "/repos", title: "Repos" }
];

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
            {headerLink.map(el => {
                return (
                    <li key={el.title}>
                        <NavLink to={el.to}>{el.title}</NavLink>
                    </li>
                )})
            }
            </ul>
        </nav>
    )
}

export default Navbar;
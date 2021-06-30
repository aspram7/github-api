import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./NavLink.css";
interface INavLinkProps {
  className?: string;
  to: string;
  children?: React.ReactNode;
}

const NavLink: React.FC<INavLinkProps> = ({ className, to, children }) => {
  return (
    <RouterNavLink
      exact
      activeClassName="app-nav-link--active"
      className={`app-nav-link ${className}`}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;

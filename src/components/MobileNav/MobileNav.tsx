import React, { useState } from "react";
import { Link } from "gatsby";
import { Twirl as Hamburger } from "hamburger-react";
import "./MobileNav.scss";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}
const MobileNav: React.FC<Props> = ({ isOpen, path, setOpen }) => {
  return (
    <>
      <div className="hamburger">
        <Hamburger color={isOpen ? "#fff" : "#35393f"} rounded size={24} toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={isOpen ? "navLinksOpened" : "navLinks"}>
        <Link to="/" className={path === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={path === "/about" ? "active" : ""}>
          About Us
        </Link>
        <Link to="/services" className={path === "/services" ? "active" : ""}>
          Services
        </Link>
        <Link to="/projects" className={path === "/projects" ? "active" : ""}>
          Projects
        </Link>
        <Link to="/clients" className={path === "/clients" ? "active" : ""}>
          Our clients
        </Link>
        <Link to="/careers" className={path === "/careers" ? "active" : ""}>
          Careers
        </Link>
        <Link to="/contacts" className={path === "/contacts" ? "active" : ""}>
          Contact Us
        </Link>
      </div>
    </>
  );
};
export default MobileNav;

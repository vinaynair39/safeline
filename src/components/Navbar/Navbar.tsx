import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import "./Navbar.scss";

interface Props {
  path: string;
}
const Navbar: React.FC<Props> = ({ path }) => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/" className={path === "/" ? "active" : ""}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" className={path === "/about" ? "active" : ""}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/services" className={path === "/services" ? "active" : ""}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/projects" className={path === "/projects" ? "active" : ""}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/clients" className={path === "/clients" ? "active" : ""}>
          Our clients
        </Link>
      </li>
      <li>
        <Link to="/careers" className={path === "/careers" ? "active" : ""}>
          Careers
        </Link>
      </li>
      <li>
        <Link to="/contacts" className={path === "/contacts" ? "active" : ""}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
};
export default Navbar;

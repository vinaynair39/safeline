import { Link } from "gatsby";
import classnames from "classnames";
import React from "react";
import styles from "./Navbar.module.scss";

interface Props {
  path: string;
}
const Navbar: React.FC<Props> = ({ path }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdown}>
        <div className={styles.menuItem}>
          <Link to="/" className={classnames(styles.button, { [styles.active]: path === "/" })}>
            Home
          </Link>
        </div>
        <div className={styles.menuItem}>
          <a className={classnames(styles.button, { [styles.active]: path === "/about" })}>About Us</a>
          <ul>
            <li>
              <Link to="/">Organizational Chart</Link>
            </li>
            <li>
              <Link to="/">List of tools & Plants</Link>
            </li>
            <li>
              <Link to="/">Statuary Details</Link>
            </li>
            <li>
              <Link to="/">Certificates</Link>
            </li>
            <li>
              <Link to="/awards">Awards & Recognition</Link>
            </li>
          </ul>
        </div>
        <div className={styles.menuItem}>
          <a className={classnames(styles.button, { [styles.active]: path === "/services" })}>Services</a>
          <ul>
            <li>
              <Link to="/">New Sub Station Work</Link>
            </li>
            <li>
              <Link to="/">Liasoning with MSEDCL & PWD</Link>
            </li>
            <li>
              <Link to="/">Anual Electrical Maintenance</Link>
            </li>
            <li>
              <Link to="/">Supply Power Control Panels</Link>
            </li>
            <li>
              <Link to="/awards">Cable Tray Fabrication & Inst</Link>
            </li>
            <li>
              <Link to="/awards">HT/ LT Cable Laying</Link>
            </li>
            <li>
              <Link to="/awards">HT Overhead Line Work</Link>
            </li>
            <li>
              <Link to="/awards">Earthing System/ Protection</Link>
            </li>
            <li>
              <Link to="/awards">Manpower Outsourcing</Link>
            </li>
            <li>
              <Link to="/awards">Streetlights & Warehouse Lighting</Link>
            </li>
            <li>
              <Link to="/awards">Internal & External Electrification</Link>
            </li>
            <li>
              <Link to="/awards">Civil & Mechanical Works</Link>
            </li>
          </ul>
        </div>
        <div className={styles.menuItem}>
          <Link to="/projects" className={classnames(styles.button, { [styles.active]: path === "/projects" })}>
            Projects
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/clients" className={classnames(styles.button, { [styles.active]: path === "/clients" })}>
            Our clients
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/careers" className={classnames(styles.button, { [styles.active]: path === "/careers" })}>
            Careers
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/contacts" className={classnames(styles.button, { [styles.active]: path === "/contacts" })}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

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
              <Link to="/chart">Organizational Chart</Link>
            </li>
            <li>
              <Link to="/tools">List of tools & Plants</Link>
            </li>
            <li>
              <Link to="/statuary">Statuary Details</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
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
              <Link to="/new-sub-station-work">New Sub Station Work</Link>
            </li>
            <li>
              <Link to="/electrical-legal-liasoning">Electrical Legal Liasoning with MSEDCL & PWD</Link>
            </li>
            <li>
              <Link to="/annual-electrical-maintainance">Anual Electrical Maintenance</Link>
            </li>
            <li>
              <Link to="/supply-power-control-panels">Supply Power Control Panels</Link>
            </li>
            <li>
              <Link to="/cabel-tray-fabrication-and-installation">Cable Tray Fabrication & Installation</Link>
            </li>
            <li>
              <Link to="/ht-and-lt-cable-laying">HT/LT Cable Laying</Link>
            </li>
            <li>
              <Link to="/ht-overhead-line-work">HT Overhead Line Work</Link>
            </li>
            <li>
              <Link to="/earthing-system-and-protection">Earthing System/Protection</Link>
            </li>
            <li>
              <Link to="/manpower-outsourcing">Manpower Outsourcing</Link>
            </li>
            <li>
              <Link to="/streetlights-and-warehouse-lighting">Streetlights & Warehouse Lighting</Link>
            </li>
            <li>
              <Link to="/internal-and-external-electrification">Internal & External Electrification</Link>
            </li>
            <li>
              <Link to="/civil-and-mechanical-works">Civil & Mechanical Works</Link>
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

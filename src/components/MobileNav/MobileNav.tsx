import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Twirl as Hamburger } from "hamburger-react";
import styles from "./MobileNav.module.scss";
import classnames from "classnames";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}
const MobileNav: React.FC<Props> = ({ isOpen, path, setOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
          slug
          serviceName
        }
      }
    }
  `);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.hamburger}>
          <Hamburger color={"#35393f"} rounded size={24} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={styles.dropdown} style={isOpen ? { display: "block" } : {}}>
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
              {data.allContentfulService.nodes.map(({ slug, serviceName }: { slug: string; serviceName: string }) => {
                return (
                  <li>
                    <Link to={`/${slug}`}>{serviceName}</Link>
                  </li>
                );
              })}
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
    </>
  );
};
export default MobileNav;

// <div className={styles.hamburger}>
//         <Hamburger color={isOpen ? "#fff" : "#35393f"} rounded size={24} toggled={isOpen} toggle={setOpen} />
//       </div>
//       <div className={isOpen ? styles.navLinksOpened : styles.navLinks}>
//         <ul>
//           <li>

//           </li>
//         </ul>
//         <Link to="/" className={path === "/" ? "active" : ""}>
//           Home
//         </Link>
//         <Link to="/about" className={path === "/about" ? "active" : ""}>
//           About Us
//         </Link>
//         <Link to="/services" className={path === "/services" ? "active" : ""}>
//           Services
//         </Link>
//         <Link to="/projects" className={path === "/projects" ? "active" : ""}>
//           Projects
//         </Link>
//         <Link to="/clients" className={path === "/clients" ? "active" : ""}>
//           Our clients
//         </Link>
//         <Link to="/careers" className={path === "/careers" ? "active" : ""}>
//           Careers
//         </Link>
//         <Link to="/contacts" className={path === "/contacts" ? "active" : ""}>
//           Contact Us
//         </Link>
//       </div>

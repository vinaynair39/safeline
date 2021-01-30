import { graphql, Link, useStaticQuery } from "gatsby";
import classnames from "classnames";
import React from "react";
import styles from "./Navbar.module.scss";

interface Props {
  path: string;
}
const Navbar: React.FC<Props> = ({ path }) => {
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
    <nav className={styles.navbar}>
      <div className={styles.dropdown}>
        <div className={styles.menuItem}>
          <Link to="/" className={classnames(styles.button, { [styles.active]: path === "/" })}>
            Home
          </Link>
        </div>
        <div className={styles.menuItem}>
          <a href="#welcomeInfo" className={classnames(styles.button, { [styles.active]: path === "/about" })}>
            About Us
          </a>
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
          <a href="#services" className={classnames(styles.button, { [styles.active]: path === "/services" })}>
            Services
          </a>
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
  );
};
export default Navbar;

import { graphql, Link, useStaticQuery } from 'gatsby';
import classnames from 'classnames';
import React from 'react';
import styles from './Navbar.module.scss';

interface Props {
  path: string;
}
const Navbar: React.FC<Props> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      OTHERS: allContentfulService(filter: { type: { eq: "OTHERS" } }) {
        nodes {
          serviceName
          slug
        }
      }
      MECHANICAL: allContentfulService(filter: { type: { eq: "MECHANICAL" } }) {
        nodes {
          serviceName
          slug
        }
      }
      ELECTRICAL: allContentfulService(filter: { type: { eq: "ELECTRICAL" } }) {
        nodes {
          serviceName
          slug
        }
      }
      contentfulBroucher {
        broucher {
          file {
            url
          }
        }
      }
    }
  `);

  const broucherURL = data?.contentfulBroucher?.broucher?.file?.url || '';
  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdown}>
        <div className={styles.menuItem}>
          <Link
            to="/"
            className={classnames(styles.button, {
              [styles.active]: path === '/',
            })}
          >
            Home
          </Link>
        </div>
        <div className={styles.menuItem}>
          <a
            href="#welcomeInfo"
            className={classnames(styles.button, {
              [styles.active]: path === '/about',
            })}
          >
            About Us
          </a>
          <ul className={styles.menu}>
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
          </ul>
        </div>
        <div className={styles.menuItem}>
          <a
            href="#services"
            className={classnames(styles.button, {
              [styles.active]: path === '/services',
            })}
          >
            Services
          </a>
          <ul className={styles.menu}>
            <li>
              <button>Electrical Services</button>
              <ul className={styles.submenu}>
                {data.ELECTRICAL.nodes.map(
                  ({
                    slug,
                    serviceName,
                  }: {
                    slug: string;
                    serviceName: string;
                  }) => {
                    return (
                      <Link
                        to={`/${slug}`}
                        className={styles.submenuLink}
                        key={slug}
                      >
                        <li>{serviceName}</li>
                      </Link>
                    );
                  }
                )}
              </ul>
            </li>
            <li>
              <button>Mechanical Services</button>
              <ul className={styles.submenu}>
                {data.MECHANICAL.nodes.map(
                  ({
                    slug,
                    serviceName,
                  }: {
                    slug: string;
                    serviceName: string;
                  }) => {
                    return (
                      <Link to={`/${slug}`} key={slug}>
                        <li>{serviceName}</li>
                      </Link>
                    );
                  }
                )}
              </ul>
            </li>
            <li>
              <button>Civil Services</button>
              <ul className={styles.submenu}>
                {data.OTHERS.nodes.map(
                  ({
                    slug,
                    serviceName,
                  }: {
                    slug: string;
                    serviceName: string;
                  }) => {
                    return (
                      <Link to={`/${slug}`} key={slug}>
                        <li>{serviceName}</li>
                      </Link>
                    );
                  }
                )}
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.menuItem}>
          <Link
            to="/projects"
            className={classnames(styles.button, {
              [styles.active]: path === '/projects',
            })}
          >
            Projects
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            to="/clients"
            className={classnames(styles.button, {
              [styles.active]: path === '/clients',
            })}
          >
            Our clients
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            to="/careers"
            className={classnames(styles.button, {
              [styles.active]: path === '/careers',
            })}
          >
            Careers
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            to="/contacts"
            className={classnames(styles.button, {
              [styles.active]: path === '/contacts',
            })}
          >
            Contact Us
          </Link>
        </div>
        <div className={styles.menuItem}>
          <a
            href={broucherURL}
            target="_blank"
            className={classnames(styles.button)}
          >
            Broucher
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

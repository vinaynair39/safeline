import React, { useState } from "react";
import Telephone from "../../assets/telephone.svg";
import Mail from "../../assets/mail.svg";
import Img from "gatsby-image";

import MobileNav from "../MobileNav/MobileNav";
import { graphql, Link, useStaticQuery } from "gatsby";

import styles from "./Header.module.scss";

interface Props {
  path: string;
}

const Header: React.FC<Props> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <div className={styles.imageContainer}>
          <Img fluid={data.logo.childImageSharp.fluid} style={{ width: "100%" }} />
        </div>
        <p>
          Safeline <span>Electricals</span>
        </p>
      </Link>
      {/* <MobileNav isOpen={isOpen} path={path} setOpen={setOpen} /> */}
      <div className={styles.info}>
        <div className={styles.telephone}>
          <Telephone />
          <p>(022)27401956/8425846364</p>
        </div>
        <div className={styles.mail}>
          <Mail />
          <p>safelineelectricals@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Header;

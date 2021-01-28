import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../../assets/arrow.svg";
import styles from "./Hero.module.scss";

interface Props {
  pretitle: string;
  title: string;
  image: [any];
}
const Hero: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "bg-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <div className={styles.hero}>
      <Img fluid={sources} />
      <div className={styles.content}>
        <p className={styles.pretitle}>Safeline Electricals is</p>
        <p className={styles.title}>A Grade Government Registered & Licensed Electrical Contractor</p>
        <div className={styles.buttons}>
          <button className={styles.primary}>
            Get A Quote <Arrow />
          </button>
          <button className={styles.secondary}>
            Our Services
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

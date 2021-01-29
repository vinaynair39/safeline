import React from "react";
import Img from "gatsby-image";
import Arrow from "../../assets/arrow.svg";
import styles from "./Hero.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  pretitle: string;
  title: string;
  images: any[];
}
const Hero: React.FC<Props> = ({ pretitle, title, images }) => {
  return (
    <div className={styles.hero}>
      <Img fluid={images} />
      <div className={styles.content}>
        <p className={styles.pretitle}>{pretitle}</p>
        <p className={styles.title}>{title}</p>
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

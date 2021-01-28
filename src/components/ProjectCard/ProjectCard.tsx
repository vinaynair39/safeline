import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";

interface Props {
  image: any;
  title: string;
  description: string;
  isMobile: boolean;
}
const ProjectCard: React.FC<Props> = ({ isMobile, image, title, description }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {isMobile ? (
          <p className={styles.description}>
            {description.substring(0, 150)} {description.length > 150 ? " ..." : ""}
          </p>
        ) : (
          <p className={styles.description}>
            {description.substring(0, 300)} {description.length > 300 ? " ..." : ""}
          </p>
        )}

        <Link to="/projects" className={styles.button}>
          Explore More
        </Link>
      </div>
      <div className={styles.image}>
        <GatsbyImage fluid={image} />
      </div>
    </div>
  );
};
export default ProjectCard;

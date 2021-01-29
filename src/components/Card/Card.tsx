import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import styles from "./Card.module.scss";

interface Props {
  image: any;
  title: string;
  slug: string;
  type: string;
}
const Card: React.FC<Props> = ({ image, title, slug, type = "SERVICE" }) => {
  return (
    <Link to={slug} className={styles.card}>
      <div className={styles.image}>
        <Img fluid={image} className={styles.imageTag} />
      </div>
      <div className={styles.content}>
        <Link to={slug} className={styles.title}>
          {title}
        </Link>
        <div>
          <button>
            <Link to={slug}>{type === "SERVICE" ? "View Service" : "View Project"}</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Card;

import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styles from "./Card.module.scss";

interface Props {
  image: any;
  title: string;
  slug: string;
  type: string;
}

const Card: React.FC<Props> = ({ image, title, slug, type = "SERVICE" }) => {
  const route = type === "PROJECT" ? `/projects/${slug}` : `/${slug}`;
  return (
    <Link to={route} className={styles.card}>
      <div className={styles.image}>
        <Img fluid={image} className={styles.imageTag} alt={title} />
      </div>
      <div className={styles.content}>
        <Link to={route} className={styles.title}>
          {title}
        </Link>
        <div>
          <button>
            <Link to={route}>{type === "SERVICE" ? "View Service" : "View Project"}</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Card;

import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import styles from "./Card.module.scss";

interface Props {
  image: any;
  title: string;
}
const Card: React.FC<Props> = ({ image, title }) => {
  const route = title.replaceAll(" ", "-").toLocaleLowerCase();
  return (
    <Link to={route} className={styles.card}>
      <div className={styles.image}>
        <Img fluid={image} />
      </div>
      <div className={styles.content}>
        <Link to={route} className={styles.title}>
          {title}
        </Link>
        <div>
          <button>
            <Link to={route}>Read More</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Card;

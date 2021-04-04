import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styles from "./Card.module.scss";

interface Props {
  image: any;
  title: string;
  slug: string;
  type?: string;
  forBlog?: boolean;
}

const Card: React.FC<Props> = ({
  image,
  title,
  slug,
  type = "SERVICE",
  forBlog = false,
}) => {
  let route = type === "PROJECT" ? `/projects/${slug}` : `/${slug}`;
  route = forBlog ? `/blog/${slug}` : route;
  return (
    <Link to={route} className={styles.card}>
      <div className={styles.image}>
        {forBlog ? (
          <img src={image} className={styles.imageTag} alt={title} />
        ) : (
          <Img fluid={image} className={styles.imageTag} alt={title} />
        )}
      </div>
      <div className={styles.content}>
        <Link to={route} className={styles.title}>
          {title.substring(0, 60)}
          {title.length > 60 && ".."}
        </Link>
        <div>
          <button>
            <Link to={route}>
              {forBlog ? "View Blog" : type === "SERVICE" ? "View Service" : "View Project"}
            </Link>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Card;

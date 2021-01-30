import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Slider from "infinite-react-carousel";
import styles from "./ProjectCard.module.scss";
import SlipInWhenVisible from "../SlipInWhenVisible/SlipInWhenVisible";
import SlipInRightWhenVisible from "../SlipInWhenVisible/SlipInRightWhenVisible";

interface Props {
  image: any;
  title: string;
  description: string;
  isMobile: boolean;
  exploreMore: boolean;
}

const ProjectCard: React.FC<Props> = ({ isMobile, image, title, description, exploreMore = true }) => {
  return (
    <div className={styles.projectCard}>
      <SlipInWhenVisible>
        <div className={styles.content} style={!exploreMore ? { justifyContent: "center" } : {}}>
          <h1 className={styles.title}>{title}</h1>
          {isMobile ? (
            <p className={styles.description}>
              {description.substring(0, 150)} {description.length > 150 ? " ..." : ""}
            </p>
          ) : (
            <p className={styles.description}>{description}</p>
          )}

          {exploreMore && (
            <Link to="/projects" className={styles.button}>
              Explore More
            </Link>
          )}
        </div>
      </SlipInWhenVisible>

      <div className={styles.imageCard}>
        <SlipInRightWhenVisible>
          {Array.isArray(image) ? (
            <Slider autoplay arrows={false} autoplaySpeed={4000}>
              {image.map((node: any) => {
                return <GatsbyImage fluid={node.fluid} className={styles.image} />;
              })}
            </Slider>
          ) : (
            <GatsbyImage fluid={image} className={styles.image} />
          )}
        </SlipInRightWhenVisible>
      </div>
    </div>
  );
};
export default ProjectCard;

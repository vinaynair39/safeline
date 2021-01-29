import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

interface Props {}
const Projects: React.FC<Props> = ({}) => {
  const [commentIndex, setCommentIndex] = useState(0);
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeaturedProject(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
          title
          description {
            description
          }
          images {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `);

  const commentIndexChange = (index: number) => {
    if (data.allContentfulFeaturedProject.nodes.length - 1 >= index) {
      setCommentIndex(index);
    }
  };
  return (
    <div className={styles.projects}>
      <p className={styles.title}>Featured Projects</p>
      <h1 className={styles.heading}>
        Our Recent <span>Works</span>
      </h1>

      <ProjectCard
        image={data.allContentfulFeaturedProject.nodes[commentIndex].images}
        isMobile={false}
        title={data.allContentfulFeaturedProject.nodes[commentIndex].title}
        description={data.allContentfulFeaturedProject.nodes[commentIndex].description.description}
        exploreMore={true}
      />
      <div className={styles.buttons}>
        <button onClick={() => commentIndexChange(0)}></button>
        <button onClick={() => commentIndexChange(1)}></button>
        <button onClick={() => commentIndexChange(2)}></button>
        <button onClick={() => commentIndexChange(3)}></button>
      </div>
    </div>
  );
};
export default Projects;

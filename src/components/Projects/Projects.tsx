import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SlipInWhenVisible from "../SlipInWhenVisible/SlipInWhenVisible";
import styles from "./Projects.module.scss";

interface Props {
  exploreMore: boolean;
}
const Projects: React.FC<Props> = ({ exploreMore }) => {
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
      <SlipInWhenVisible>
        <p className={styles.title}>Featured Projects</p>
        <h1 className={styles.heading}>
          Our Recent <span>Works</span>
        </h1>
      </SlipInWhenVisible>

      <ProjectCard
        image={data.allContentfulFeaturedProject.nodes[commentIndex].images}
        isMobile={false}
        title={data.allContentfulFeaturedProject.nodes[commentIndex].title}
        description={data.allContentfulFeaturedProject.nodes[commentIndex].description.description}
        exploreMore={exploreMore}
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

{
  /* <Slider autoplay arrows={false} autoplaySpeed={4000}>
{data.allContentfulFeaturedProject.nodes.map((node: any) => {
  return <ProjectCard image={node.images} isMobile={false} title={node.title} description={node.description.description} exploreMore={exploreMore} />;
})}
</Slider> */
}

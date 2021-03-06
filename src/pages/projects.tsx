import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";
import SEO from "../components/SEO/SEO";
import styles from "../styles/index.module.scss";

const projects: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        nodes {
          title
          slug
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

  return (
    <Layout path={path}>
      <div className={styles.projects}>
        <SEO title={"Our Projects"} description={null} />
        <Projects exploreMore={false} />
        <div className={styles.other}>
          <h1 className={styles.heading}>
            <span>Other Projects</span>
          </h1>
          <div className={styles.cards}>
            {data.allContentfulProject.nodes.map(({ title, images, slug }: { title: string; images: any; slug: string }) => {
              return <Card image={images[0].fluid} title={title} slug={slug} type="PROJECT" />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default projects;

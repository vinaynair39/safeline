import { graphql, PageProps } from "gatsby";
import React from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SEO from "../components/SEO/SEO";
import styles from "./project.module.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
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
    allContentfulProject(filter: { slug: { ne: $slug } }) {
      nodes {
        title
        slug
        description {
          description
        }
        images {
          fluid {
            src
          }
        }
      }
    }
  }
`;

const project: React.FC<PageProps> = ({ path, data }: { path: string; data: any }) => {
  return (
    <Layout path={path}>
      <SEO title={data.contentfulProject.title} description={data.contentfulProject.description.description} />
      <div className={styles.projects}>
        <h1 className={styles.heading}>
          <span>{data.contentfulProject.title}</span>
        </h1>
        <ProjectCard
          title={data.contentfulProject.title}
          description={data.contentfulProject.description.description}
          image={data.contentfulProject.images}
          isMobile={false}
          exploreMore={false}
        />
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
export default project;

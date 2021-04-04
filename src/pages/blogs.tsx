import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";
import SEO from "../components/SEO/SEO";
import styles from "../styles/index.module.scss";

const blogs: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: [published], order: DESC }) {
        nodes {
          slug
          coverImage {
            file {
              url
            }
          }
          title
        }
      }
    }
  `);

  return (
    <Layout path={path}>
      <div className={styles.projects}>
        <SEO title={"Our Blogs"} description={null} />
        <div className={styles.other}>
          <h1 className={styles.heading}>
            <span>Our Blogs</span>
          </h1>
          <div className={styles.cards}>
            {data.allContentfulBlog.nodes.map(({ title, coverImage, slug }: { title: string; coverImage: any; slug: string }) => {
              console.log(coverImage.file.url)
              return <Card image={coverImage.file.url} title={title} slug={slug} forBlog />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default blogs;

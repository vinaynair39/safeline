import { graphql, PageProps, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import SlipInWhenVisible from "../components/SlipInWhenVisible/SlipInWhenVisible";
import styles from "../styles/index.module.scss";

const tools: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      chart: file(relativePath: { eq: "tools.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout path={path}>
      <div className={styles.tools}>
        <SecondaryLayout>
          <SlipInWhenVisible>
            <div className={styles.content}>
              <h1 className={styles.heading}>
                <span>List of Tools and Plants</span>
              </h1>
              <div className={styles.image}>
                <GatsbyImage fluid={data.chart.childImageSharp.fluid} />
              </div>
            </div>
          </SlipInWhenVisible>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default tools;

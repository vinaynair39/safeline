import { graphql, PageProps, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import ServiceBar from "../components/ServiceBar/ServiceBar";
import styles from "../styles/index.module.scss";

const chart: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      chart: file(relativePath: { eq: "chart.png" }) {
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
      <div className={styles.chart}>
        <SecondaryLayout>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span>Organizational chart</span>
            </h1>
            <div className={styles.image}>
              <GatsbyImage fluid={data.chart.childImageSharp.fluid} />
            </div>
          </div>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default chart;

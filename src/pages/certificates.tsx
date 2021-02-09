import { graphql, PageProps, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Slider from "infinite-react-carousel";

import Layout from "../components/Layout/Layout";
import styles from "../styles/index.module.scss";

const certificates: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "certi" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.certificates}>
      <Layout path={path}>
        <div className={styles.slider}>
          <Slider dots>
            {data.allFile.edges.map((item: any) => {
              return (
                <div className={styles.images}>
                  <GatsbyImage fluid={item.node.childImageSharp.fluid} />;
                </div>
              );
            })}
          </Slider>
        </div>
      </Layout>
    </div>
  );
};
export default certificates;

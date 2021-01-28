import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Services.module.scss";

interface Props {}
const Services: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "services" } }, sort: { fields: relativePath, order: ASC }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.services}>
      <h1 className={styles.heading}>
        Our <span>Services</span>
      </h1>
      <div className={styles.description}>We are a team of professionals and skilled experts and we offer a wide range of services & solutions</div>
      <div className={styles.cards}>
        {data.allFile.edges.map(({ node }: any) => {
          const image = node.childImageSharp.fluid;
          let title = node.childImageSharp.fluid.originalName.split(".")[0];
          title = title.replace(/[0-9]/g, "").trim();
          return <Card image={image} title={title} />;
        })}
      </div>
    </div>
  );
};
export default Services;

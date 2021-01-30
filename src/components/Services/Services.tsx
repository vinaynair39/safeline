import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../Card/Card";
import FadeInWhenVisible from "../FadeInWhenVisible/FadeInWhenVisible";
import SlipInWhenVisible from "../SlipInWhenVisible/SlipInWhenVisible";
import styles from "./Services.module.scss";

interface Props {}
const Services: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulService(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
          serviceName
          slug
          image {
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
    <div className={styles.services} id="services">
      <SlipInWhenVisible>
        <h1 className={styles.heading}>
          Our <span>Services</span>
        </h1>
      </SlipInWhenVisible>

      <div className={styles.description}>We are a team of professionals and skilled experts and we offer a wide range of services & solutions</div>
      <div className={styles.cards}>
        {data.allContentfulService.nodes.map(({ serviceName, image, slug }: { serviceName: string; image: any; slug: string }) => {
          return <Card image={image.fluid} title={serviceName} slug={slug} type={"SERVICE"} />;
        })}
      </div>
    </div>
  );
};
export default Services;

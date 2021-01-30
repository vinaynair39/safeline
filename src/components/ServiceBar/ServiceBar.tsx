import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styles from "./ServiceBar.module.scss";

interface Props {}
const ServiceBar: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
          serviceName
          slug
        }
      }
    }
  `);

  return (
    <div className={styles.servicebar}>
      <h1 className={styles.heading}>Our Services</h1>
      <ul>
        {data.allContentfulService.nodes.map(({ serviceName, slug }: { serviceName: string; slug: string }) => {
          return (
            <li>
              <Link to={`/${slug}`}>{serviceName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ServiceBar;

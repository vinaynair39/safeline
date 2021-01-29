import { graphql, PageProps } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import Arrow from "../assets/arrow.svg";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import styles from "./service.module.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      serviceName
      primaryDescription {
        primaryDescription
      }
      secondaryDescription {
        secondaryDescription
      }
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
`;

const service: React.FC<PageProps> = ({ data, path }: { data: any; path: string }) => {
  console.log(data);
  return (
    <Layout path={path}>
      <div className={styles.service}>
        <SecondaryLayout>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span>{data.contentfulService.serviceName}</span>
            </h1>
            <div className={styles.main}>
              <div className={styles.image}>
                <GatsbyImage fluid={data.contentfulService.image.fluid} />
                <div className={styles.button}>
                  <button>
                    <a href="">
                      Enquire Us
                      <Arrow />
                    </a>
                  </button>
                </div>
              </div>
              <div className={styles.text}>
                <p>{data.contentfulService.primaryDescription.primaryDescription}</p>
                {!!data.contentfulService.secondaryDescription && (
                  <p className={styles.bottomText}>{data.contentfulService.secondaryDescription.secondaryDescription}</p>
                )}
              </div>
            </div>
          </div>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default service;

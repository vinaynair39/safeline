import { graphql, PageProps } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import Arrow from "../assets/arrow.svg";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import styles from "./service.module.scss";
import SlipInWhenVisible from "../components/SlipInWhenVisible/SlipInWhenVisible";
import SEO from "../components/SEO/SEO";

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
      <SEO title={data.contentfulService.serviceName} description={data.contentfulService.primaryDescription.primaryDescription} />
      <div id="services" className={styles.service}>
        <SecondaryLayout>
          <SlipInWhenVisible>
            <div className={styles.content}>
              <h1 className={styles.heading}>
                <span>{data.contentfulService.serviceName}</span>
              </h1>
              <div className={styles.main}>
                <div className={styles.image}>
                  <GatsbyImage fluid={data.contentfulService.image.fluid} />
                  <div className={styles.button}>
                    <button>
                      <a href="#quoteForm">
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
          </SlipInWhenVisible>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default service;

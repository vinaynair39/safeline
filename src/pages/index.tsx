import * as React from "react";
import { useEffect, useState } from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Hero from "../components/Hero/Hero";
import WelcomeInfo from "../components/WelcomeInfo/WelcomeInfo";
import Services from "../components/Services/Services";
import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import Stats from "../components/Stats/Stats";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import Layout from "../components/Layout/Layout";

import styles from "../styles/index.module.scss";

const IndexPage: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "bg-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage2: file(relativePath: { eq: "bg2-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage2: file(relativePath: { eq: "bg2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allContentfulFeaturedProject(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
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
      }
    }
  `);

  // const source = homeHero ? source1 : source2;

  return (
    <Layout path={path}>
      <div className={styles.home}>
        <Hero />
        <WelcomeInfo />
        <Services />
        <Stats clients={83} projects={200} employees={150} />
        <Clients />
        <Projects exploreMore={true} />
        <div className={styles.quote}>
          <div className={styles.image}></div>
          <div className={styles.form} id="quoteForm">
            <QuoteForm stretch={false} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

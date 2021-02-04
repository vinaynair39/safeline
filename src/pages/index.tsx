import * as React from "react";
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
import { motion } from "framer-motion";
import SEO from "../components/SEO/SEO";

const IndexPage: React.FC<PageProps> = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStats {
        nodes {
          title
          value
        }
      }
    }
  `);
  const statsValue: { [key: string]: number } = {};

  data.allContentfulStats.nodes.forEach(({ title, value }: { title: string; value: number }) => {
    statsValue[title] = value;
  });

  const animation = {
    from: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <motion.div className={styles.home} variants={animation} animate="to" initial="from">
      <SEO title={null} description={null} />
      <Layout path={path}>
        <Hero />
        <WelcomeInfo />
        <Services />
        <Stats clients={statsValue.clients} projects={statsValue.projects} employees={statsValue.employees} />
        <Clients />
        <Projects exploreMore={true} />
        <div className={styles.quote}>
          <div className={styles.image}></div>
          <div className={styles.form} id="quoteForm">
            <QuoteForm stretch={false} />
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};
export default IndexPage;

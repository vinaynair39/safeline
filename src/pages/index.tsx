import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero/Hero";
import WelcomeInfo from "../components/WelcomeInfo/WelcomeInfo";
import Services from "../components/Services/Services";
import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import Stats from "../components/Stats/Stats";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import styles from "../styles/index.module.scss";
import Layout from "../components/Layout/Layout";
const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.home}>
        <Hero />
        <WelcomeInfo />
        <Services />
        <Stats clients={83} projects={200} employees={150} />
        <Clients />
        <Projects />
        <div className={styles.quote}>
          <div className={styles.image}></div>
          <div className={styles.form}>
            <QuoteForm stretch={false} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

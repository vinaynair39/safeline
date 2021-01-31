import { PageProps } from "gatsby";
import React from "react";
import CVForm from "../components/CVForm/CVForm";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import styles from "../styles/index.module.scss";

interface Props {}
const careers: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.careers}>
        <SEO title={"Join Us"} description={null} />
        <div className={styles.text}>
          <h1 className={styles.heading}>
            <span>Join Us</span>
          </h1>
          <p>Diploma in Electrical Engineering 1-2 years</p>
          <p>Experience Electrician ITI with NCTVT 1-5 years</p>
          <p>Experience Wireman PWD license Holder 2-3 years Experience</p>
        </div>
        <div className={styles.form}>
          <CVForm />
        </div>
      </div>
    </Layout>
  );
};
export default careers;

import { PageProps } from "gatsby";
import React, { useState } from "react";
import CVForm from "../components/CVForm/CVForm";
import Layout from "../components/Layout/Layout";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import styles from "../styles/index.module.scss";

interface Props {}
const contact: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.contacts}>
        <div className={styles.form}>
          <QuoteForm stretch={true} />
        </div>
      </div>
    </Layout>
  );
};
export default contact;

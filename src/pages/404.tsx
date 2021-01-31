import { Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import styles from "../styles/index.module.scss";

interface Props {}
const notFound: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.notFound}>
        <SEO title={"Page Not Found"} description={null} />
        <h1>
          Looks like this site doesn't exist. Head back to <Link to="/">home</Link>
        </h1>
      </div>
    </Layout>
  );
};
export default notFound;

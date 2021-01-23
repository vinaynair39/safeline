import { PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <div className="home">
      <Header path={path} />
      <Footer />
    </div>
  );
};
export default IndexPage;

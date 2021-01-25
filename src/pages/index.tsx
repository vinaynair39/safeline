import * as React from "react";
import { PageProps } from "gatsby";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <div className="home">
      <Header path={path} />
      <Navbar path={path} />
      <Hero />
      <Footer />
    </div>
  );
};
export default IndexPage;

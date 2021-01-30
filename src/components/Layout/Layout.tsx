import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

interface Props {
  path: string;
}
const Layout: React.FC<Props> = ({ children, path }) => {
  return (
    <div className={styles.layout}>
      <Header path={path} />
      <Navbar path={path} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;

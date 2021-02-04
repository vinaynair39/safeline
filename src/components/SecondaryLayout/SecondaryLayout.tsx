import React from "react";
import QuoteForm from "../QuoteForm/QuoteForm";
import ServiceBar from "../ServiceBar/ServiceBar";
import styles from "./SecondaryLayout.module.scss";

interface Props {}
const SecondaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.secondaryLayout}>
      <div className={styles.main}>
        {children}
        <div className={styles.servicebar}>
          <ServiceBar />
        </div>
      </div>
      <div className={styles.form} id="quoteForm">
        <QuoteForm stretch={true} />
      </div>
    </div>
  );
};
export default SecondaryLayout;

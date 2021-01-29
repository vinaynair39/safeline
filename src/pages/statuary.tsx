import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import ServiceBar from "../components/ServiceBar/ServiceBar";
import Table from "../components/Table/Table";
import styles from "../styles/index.module.scss";

const data = [
  ["Name of the Company", "Safeline Electricals"],
  ["Type Of Company", "Propriotership"],
  ["Established", "February 1997"],
  ["Govt. Licence No", "MC - 11434"],
  ["P.W.D. Registration", "A' Class (Unlimited Value Work)"],
  ["MSME Certificate No.	", "27-024-22-00152 Part II"],
  ["NSI Certificate No", "NSIC/MUM-AD/GP/RS/S-108MH"],
  ["PAN No.", "AFFPM6699R"],
  ["GST No.", "27AFFPM6699R1Z8"],
  ["Professional Tax No.(PTRC)", "27490988448P"],
  ["Provident Fund Code No", "MH 115567"],
  ["ESIC Registration No", "RT- 4049 - 34 - 3573 - 101 - 07"],
  ["Name Of the Bank", "Abhyudaya Co-Op Bank Ltd."],
  ["Bank Solvency", "One Crore"],
];

const statuary: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.statuary}>
        <SecondaryLayout>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span>Statuary Details</span>
            </h1>
            <div className={styles.image}>
              <Table data={data} />
            </div>
          </div>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default statuary;

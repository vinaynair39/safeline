import React from "react";
import styles from "./Table.module.scss";

interface Props {
  data: string[][];
}
const Table: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.table}>
      <ul>
        {data.map((item) => (
          <li>
            <div className={styles.first}>{item[0]}</div>
            <div className={styles.second}>{item[1]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Table;

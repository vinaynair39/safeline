import React from "react";
import styles from "./Table.module.scss";

interface Props {
  data: string[][];
  stretch: boolean;
}
const Table: React.FC<Props> = ({ data, stretch = false }) => {
  return (
    <div className={stretch ? styles.tableStretch : styles.table}>
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

import React from "react";

import Clients from "../../assets/clients.svg";
import Projects from "../../assets/projects.svg";
import Employees from "../../assets/employees.svg";

import styles from "./Stats.module.scss";
import { Link } from "gatsby";

interface Props {
  clients: number;
  projects: number;
  employees: number;
}
const Stats: React.FC<Props> = ({ clients, projects, employees }) => {
  return (
    <div className={styles.stats}>
      <Link to="/clients" className={styles.clients}>
        <Clients />
        <p className={styles.number}>{clients}</p>
        <p>Clients</p>
      </Link>
      <Link to="/projects" className={styles.projects}>
        <Projects />
        <p className={styles.number}>{projects}</p>
        <p>Projects</p>
      </Link>
      <Link to="/careers" className={styles.employees}>
        <Employees />
        <p className={styles.number}>{employees}</p>
        <p>Employees</p>
      </Link>
    </div>
  );
};
export default Stats;

import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

interface Props {}
const Projects: React.FC<Props> = ({}) => {
  return (
    <div className={styles.projects}>
      <p className={styles.title}>Featured Projects</p>
      <h1 className={styles.heading}>
        Our Recent <span>Works</span>
      </h1>

      <ProjectCard
        image={{}}
        isMobile={false}
        title={"BUILDING INTERIOR"}
        description={
          "New Substation work including Supply, Erection, New Substation work including Supply, Erection, and Testing Commissioning of outdoor & indoor equipment were incorporated at new panvel sector 16."
        }
      />
      <div className={styles.buttons}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
export default Projects;

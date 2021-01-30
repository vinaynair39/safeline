import React from "react";
import Satisfaction from "../../assets/Satisfaction.svg";
import Badge from "../../assets/badge.svg";
import electric from "../../images/electric.png";
import tower from "../../images/tower.png";

import styles from "./WelcomeInfo.module.scss";

import { motion } from "framer-motion";
import SlipInWhenVisible from "../SlipInWhenVisible/SlipInWhenVisible";

interface Props {}
const WelcomeInfo: React.FC<Props> = ({}) => {
  return (
    <div id="welcomeInfo" className={styles.welcomeInfo}>
      <SlipInWhenVisible>
        <h1 className={styles.heading}>
          welcome to <span>safeline</span> electricals
        </h1>
      </SlipInWhenVisible>

      <div className={styles.data}>
        <div className={styles.images}>
          <img src={electric} className={styles.electric} alt="" />
          <img src={tower} className={styles.tower} alt="" />
        </div>

        <div className={styles.content}>
          <p className={styles.pretitle}>About Safeline</p>
          <p className={styles.title}>We Are Authorised Zonal Contractor Of Indian Oil For All Type Of Electrical, Civil & Mechanical Work.</p>
          <p className={styles.description}>
            Founded by Mr. Harish Madhavi in 1997 and thereafter driven to successful, award-winning, and most trusted “A” class Electrical Contractors with
            determination of its tag line – "To go an extra mile" after completion of every project.
          </p>
          <p className={styles.description}>
            Today Safeline is synonymous with Technical & Managerial expertise and has financial fortitude for the victorious accomplishment of various
            Projects.
          </p>

          <motion.div className={styles.usp}>
            <motion.div className={styles.badge}>
              <Badge />
              <p>20+ years of Professional Experiance</p>
            </motion.div>
            <motion.div className={styles.satisfaction}>
              <Satisfaction />
              <p>A large number of happy customers. 100% Satisfaction.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default WelcomeInfo;

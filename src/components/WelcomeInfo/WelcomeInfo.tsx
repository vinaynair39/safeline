import React from 'react';
import electric from '../../images/electric.webp';
import tower from '../../images/tower.webp';
import { motion } from 'framer-motion';
import SlipInWhenVisible from '../SlipInWhenVisible/SlipInWhenVisible';
import Satisfaction from '../../assets/satisfaction.svg';
import Badge from '../../assets/badge.svg';

import styles from './WelcomeInfo.module.scss';

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
          <p className={styles.title}>
            SAFELINE ELECTRICALS is one of the leading player in providing
            Services and projects across India
          </p>
          <p className={styles.description}>
            The Company is engaged in servies like Electrical, Mechanical, Civil
            for more than 25 years and has worked in over various states in
            india, and also has executed prestigious Projects for Center, State
            Governments as well as Private Sectors.
          </p>
          <p className={styles.description}>
            The Company is also engaged in projects with enormous corporations
            like Indian Oil Corporation Limited, Maharashtra Industrial
            Development Corportation, Mahanagar Gas Ltd, Lubrizol India Private
            Limited, Steel Authority of India. We are authorised empanelled
            vendor for this scheme.
          </p>

          <motion.div className={styles.usp}>
            <motion.div className={styles.badge}>
              <Badge />
              <p>25+ years of Professional Experiance</p>
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

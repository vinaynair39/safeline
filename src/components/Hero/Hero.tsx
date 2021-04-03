import React from "react";
import Img from "gatsby-image";
import Arrow from "../../assets/arrow.svg";
import styles from "./Hero.module.scss";
import Slider from "infinite-react-carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";

const containerAnimation = {
  from: {
    x: -130,
    opacity: 0,
  },
  to: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1.5,
    },
  },
};

interface Props {}
const Hero: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "bg-mobile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "bg.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage2: file(relativePath: { eq: "bg2-mobile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage2: file(relativePath: { eq: "bg2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const source1 = {
    images: [
      data.mobileImage.childImageSharp.fluid,
      {
        ...data.desktopImage.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ],
    pretitle: "Safeline Electricals is",
    title: "A Class Government Registered & Licensed Electrical Contractor",
  };

  const source2 = {
    images: [
      data.mobileImage2.childImageSharp.fluid,
      {
        ...data.desktopImage2.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ],
    pretitle: "Safeline electricals also",
    title: "Undertakes all types of civil and mechanical works",
  };

  return (
    <>
      <Slider autoplay arrows={false} autoplaySpeed={8000} duration={350} pauseOnHover={false}>
        <div className={styles.hero}>
          <div>
            <Img className={styles.image} fluid={source1.images} alt="A Class Government Registered & Licensed Electrical Contractor" />
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div variants={containerAnimation} animate="to" initial="from" className={styles.content}>
              <motion.h3 variants={containerAnimation} className={styles.pretitle}>
                {source1.pretitle}
              </motion.h3>
              <motion.h1 variants={containerAnimation} className={styles.title}>
                {source1.title}
              </motion.h1>
              <motion.div variants={containerAnimation} className={styles.buttons}>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="#quoteForm"
                  className={styles.primary}
                >
                  Get A Quote <Arrow />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="#services"
                  className={styles.secondary}
                >
                  Our Services
                  <Arrow />
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.hero}>
          <Img className={styles.image} fluid={source2.images} alt="Undertakes all types of civil and mechanical works" />
          <div className={styles.content}>
            <h3 className={styles.pretitle}>{source2.pretitle}</h3>
            <h1 className={styles.title}>{source2.title}</h1>
            <motion.div className={styles.buttons}>
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                href="#quoteForm"
                className={styles.primary}
              >
                Get A Quote <Arrow />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                href="#services"
                className={styles.secondary}
              >
                Our Services
                <Arrow />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Slider>
    </>
  );
};
export default Hero;

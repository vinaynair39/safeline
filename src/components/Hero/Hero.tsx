import React from "react";
import Img from "gatsby-image";
import Arrow from "../../assets/arrow.svg";
import styles from "./Hero.module.scss";
import Slider from "infinite-react-carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

interface Props {}
const Hero: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "bg-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage2: file(relativePath: { eq: "bg2-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage2: file(relativePath: { eq: "bg2.png" }) {
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
    title: "A Grade Government Registered & Licensed Electrical Contractor",
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
    <Slider autoplay arrows={false} autoplaySpeed={8000} duration={350} pauseOnHover={false}>
      <div className={styles.hero}>
        <AnimatePresence>
          <motion.div animate={{ scale: 1 }} exit={{ opacity: 0 }}>
            <Img fluid={source1.images} />
          </motion.div>
        </AnimatePresence>

        <div className={styles.content}>
          <p className={styles.pretitle}>{source1.pretitle}</p>
          <motion.p transition={transition} exit={{ opacity: 0 }} className={styles.title}>
            {source1.title}
          </motion.p>
          <div className={styles.buttons}>
            <a href="#quoteForm" className={styles.primary}>
              Get A Quote <Arrow />
            </a>
            <a href="#services" className={styles.secondary}>
              Our Services
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <Img fluid={source2.images} />
        <div className={styles.content}>
          <p className={styles.pretitle}>{source2.pretitle}</p>
          <p className={styles.title}>{source2.title}</p>
          <div className={styles.buttons}>
            <a href="#quoteForm" className={styles.primary}>
              Get A Quote <Arrow />
            </a>
            <a href="#services" className={styles.secondary}>
              Our Services
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Hero;

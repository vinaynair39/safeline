import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Carousel from "react-multi-carousel";
import styles from "./Clients.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 3,
  },
};

interface Props {}
const Clients: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "clients" } }, sort: { fields: relativePath, order: ASC }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.clients}>
      <h1 className={styles.heading}>
        Our <span>Clients</span>
      </h1>
      <div className={styles.images}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10}
          transitionDuration={1000}
          removeArrowOnDeviceType={["mobile", "desktop"]}
          deviceType={"desktop"}
          itemClass={styles.item}
        >
          {data.allFile.edges.map(({ node }: any, index: number) => {
            const image = node.childImageSharp.fluid;
            return (
              <div className={styles.item} data-value={index}>
                <GatsbyImage fluid={image} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.reviews}>
        <p className={styles.title}>What our clients says</p>
        <div className={styles.content}>
          <img src="https://drop.ndtv.com/albums/BUSINESS/superachievers/5varunsivaram.jpg" alt="" />
          <p className={styles.name}>Mr Sanjay Kapoor</p>
          <p className={styles.designation}>Vice president of Exide</p>
          <p className={styles.comment}>
            While there is value in this, it can risk a mindset that ignores the power of good reviews too, and the need to respond to them. Positive
            reinforcement is the core concept here. Happy customers need to be heard just as much as unsatisfied ones. This shows anyone thinking of leaving a
            review that they will be heard and that their feedback matters to you.
          </p>
          <div className={styles.buttons}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;

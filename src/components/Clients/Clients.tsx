import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import { useState } from "react";
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
  const [commentIndex, setCommentIndex] = useState(0);
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
      allContentfulReview {
        nodes {
          authorName
          authorDesignation
          comment {
            comment
          }
          image {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `);

  const commentIndexChange = (index: number) => {
    if (data.allContentfulReview.nodes.length - 1 >= index) {
      setCommentIndex(index);
    }
  };

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
        <p className={styles.title}></p>
        <div className={styles.content}>
          <img className={styles.profileImage} src={data.allContentfulReview.nodes[commentIndex].image.fluid.src} alt="" />
          <p className={styles.name}>{data.allContentfulReview.nodes[commentIndex].authorName}</p>
          <p className={styles.designation}>{data.allContentfulReview.nodes[commentIndex].authorDesignation}</p>
          <p className={styles.comment}>{data.allContentfulReview.nodes[commentIndex].comment.comment}</p>
          <div className={styles.buttons}>
            <button onClick={() => commentIndexChange(0)}></button>
            <button onClick={() => commentIndexChange(1)}></button>
            <button onClick={() => commentIndexChange(2)}></button>
            <button onClick={() => commentIndexChange(3)}></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;

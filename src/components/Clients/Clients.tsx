import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import SlipInWhenVisible from "../SlipInWhenVisible/SlipInWhenVisible";
import styles from "./Clients.module.scss";

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
      <SlipInWhenVisible>
        <h1 className={styles.heading}>
          Our <span>Clients</span>
        </h1>
      </SlipInWhenVisible>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {data.allFile.edges.map(({ node }: any) => {
            const image = node.childImageSharp.fluid;
            return (
              <div className={styles.slide}>
                <GatsbyImage fluid={image} alt={"Electrical Contractor Clients"} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.reviews}>
        <p className={styles.title}></p>
        <div className={styles.content}>
          <img className={styles.profileImage} src={data.allContentfulReview.nodes[commentIndex].image.fluid.src} alt="Client Comments" />
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

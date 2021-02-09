import { graphql, PageProps, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import Layout from "../components/Layout/Layout";
import styles from "../styles/index.module.scss";

const certificates: React.FC<PageProps> = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "certi" } }, sort: { fields: [name], order: ASC }) {
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

  const images = data.allFile.edges.map((item: any) => {
    return item.node.childImageSharp.fluid.src;
  });

  return (
    <Layout path={path}>
      <div className={styles.certificates}>
        <h1 className={styles.heading}>
          <span>certificates</span>
        </h1>
        <div className={styles.slider}>
          {/* <Slider dots>
            {data.allFile.edges.map((item: any) => {
              return (
                <div className={styles.images}>
                  <GatsbyImage fluid={item.node.childImageSharp.fluid} />;
                </div>
              );
            })}
          </Slider> */}
          {data.allFile.edges.map((item: any, index: number) => {
            return (
              <div
                className={styles.images}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <GatsbyImage fluid={item.node.childImageSharp.fluid} />
              </div>
            );
          })}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + images.length + 1) % images.length)}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
export default certificates;

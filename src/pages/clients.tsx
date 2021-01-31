import { graphql, PageProps, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout";
import SEO from "../components/SEO/SEO";
import Table from "../components/Table/Table";
import styles from "../styles/index.module.scss";

const data = [
  ["Maharashtra Industrial Development Corporation, Ambarnath and Alibaug Division", "Bombay Breweries Ltd., Taloja, Navi Mumbai"],
  ["Indian Institute of Geomagnetism, Navi Mumbai", "Technova Imaging System Pvt. Ltd., Taloja, Navi Mumbai"],
  ["Established", "February 1997"],
  ["Indian Institute of Geomagnetism, Alibaug, Dist. Raigad", "Namco Corp. Pvt. Ltd., Taloja Navi Mumbai"],
  ["Central Warehousing Corporation, Dronagiri Node, Navi Mumbai", "Namco Industries Ltd., Waveshi –Khopoli, Raigad"],
  ["Central Warehousing Corporation, Kalamboli, Navi Mumbai", "Omiya India Pvt Ltd., Taloja Navi Mumbai"],
  ["Steel Authority of India Ltd., Kalamboli, Navi Mumbai", "Hikal Ltd., Taloja Navi Mumbai"],
  ["Maharashtra State Warehousing Corporation, Taloja", "Rohm and Haas India Pvt Ltd., Taloja Navi Mumbai"],
  ["Indian Oil Corporation, MIDC Taloja, Navi Mumbai", "Deepak Fertilizers and Petrochemicals Corporation Ltd. Taloja, Navi Mumbai"],
  ["Indian Oil Corporation Ltd., Vashi Terminal, Navi Mumbai", "Exide Industries Ltd., Taloja Navi Mumbai"],
  ["Indian Oil Corporation -Grease Plant, MIDC Turbhe, Navi Mumbai", "Asian Paints Ltd., Taloja Navi Mumbai"],
  ["Indian Oil Corporation Ltd. Vadala Depot, Mumbai", "M J Biopharmaceuticals Pvt Ltd., Taloja Navi Mumbai"],
  ["Indian Oil Corporation Ltd. Zonal Contract for Mumbai, Thane, Raigad, Nasik", "Tatsuno India Pvt Ltd., Taloja Mumbai"],
  ["Lubrizol India Pvt. Ltd., Taloja Navi Mumbai", "Bhushan Steel and Stripes Ltd."],
  ["Police Head Quarters, Kalamboli", "B G Sirke Construction"],
  ["", "United Vander Host Ltd., Taloja Navi Mumbai"],
  ["", "Insulation Jacketing and Accessories Pvt. Ltd."],
  ["", "Powerika Ltd., Taloja"],
  ["", "Creative Info city Ltd., Gandhinagar, Gujarat"],
  ["", "Kala Jyothi Process Pvt. Ltd., Taloja"],
];

const tools: React.FC<PageProps> = ({ path }) => {
  const logos = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "clients" } }) {
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
    <Layout path={path}>
      <div className={styles.clients}>
        <SEO title={"Our Clients"} description={null} />

        <div className={styles.logos}>
          {logos.allFile.edges.map(({ node }: any, index: number) => {
            const image = node.childImageSharp.fluid;
            console.log(!!image.src);
            return (
              <div className={styles.item} data-value={index}>
                <img src={image.src} alt="" className={styles.image} />
                {/* <GatsbyImage fluid={image} className={styles.image} /> */}
              </div>
            );
          })}
        </div>
        <SecondaryLayout>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span>Our Clients (Detailed)</span>
            </h1>
            <div className={styles.image}>
              <div className={styles.tableHeading}>
                <p>Government Sector</p>
                <p>Private Sector</p>
              </div>
              <Table data={data} stretch={true} />
            </div>
          </div>
        </SecondaryLayout>
      </div>
    </Layout>
  );
};
export default tools;

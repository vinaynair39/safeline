import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { renderRichText } from "gatsby-source-contentful/rich-text";
import styles from "./blog.module.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      authorName
      authorsPhoto {
        file {
          url
        }
      }
      coverImage {
        file {
          url
        }
      }
      published(formatString: "Do MMM, YYYY")
      body {
        raw
      }
    }
  }
`;

const Blog = ({ path, data }) => {
  const {title} = data.contentfulBlog;
  return (
    <Layout path={path}>
      <div>
        {title}
      </div>
    </Layout>
  );
};

export default Blog;

import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, PageProps } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styles from "./blog.module.scss";
import SEO from "../components/SEO/SEO";

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

const Bold = ({ children }: {children: any}) => <span className={styles.bold}>{children}</span>;
const Text = ({ children }:{children: any}) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text:any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node:any, children:any) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node:any) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};

const blog: React.FC<PageProps> = ({
  path,
  data,
}: {
  path: string;
  data: any;
}) => {
  const {
    title,
    published,
    authorName,
    authorsPhoto,
    body,
    coverImage,
    authorDesignation = "CEO"
  } = data.contentfulBlog;
  console.log(data.contentfulBlog);
  return (
    <Layout path={path}>
      <SEO title={title} description={title} />
      <div className={styles.blog}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.author}>
            <img
              className={styles.authorimage}
              src={authorsPhoto.file.url}
              alt=""
            />
            <span>{authorName}</span>
            <span> | </span>
            <span>{published}</span>
          </div>
        </div>
        <img
          className={styles.cover}
          src={coverImage.file.url}
          alt={coverImage.file.fileName}
        />
        <div className={styles.paragraph}>{renderRichText(body, options)}</div>
        <div className={styles.footer}>
          <img
            className={styles.footerimage}
            src={authorsPhoto.file.url}
            alt=""
          />
          <div className={styles.footername}>
            <div>
              <span className={styles.authorName}>{authorName}</span>
              <span className={styles.designation}>{authorDesignation}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;

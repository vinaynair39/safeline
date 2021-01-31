import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title: string | null;
  description: string | null;
}
const SEO: React.FC<Props> = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          locale
          url
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{title ? `${title} | ${data.site.siteMetadata.title}` : `${data.site.siteMetadata.title} | Governent Licensed Electrical Contractor`}</title>
      <meta name="description" content={description || data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta property="og:title" content={`${title} | ${data.site.siteMetadata.title}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description || data.site.siteMetadata.description} />
      <meta property="og:image" content="" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <link rel="canonical" href={data.site.siteMetadata.url} />
    </Helmet>
  );
};
export default SEO;

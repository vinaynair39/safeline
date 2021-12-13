require('dotenv').config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: 'Safeline Electricals',
    titleTemplate: 'Safeline Electricals',
    description:
      'A Grade Government Registered & Licensed Electrical Contractors, Engineers & Consultants. Safeline is one of the most trusted contractors from Mumbai, Maharashtra.',
    url: 'https://safelineelectricals.in', // No trailing slash allowed!
    siteUrl: 'https://safelineelectricals.in',
    locale: 'en-IN',
    image: '/logo.png',
    keywords:
      'Electrical Contractors, Licensed Electrical Contractor, Switchgear, Switchgears & Spares, Transformers, Distribution Transformers, Voltage Switchgears, Lightning Arrestors, Pre Fabricated Substation, Compact Switchgears, Ht Switchgears, Lt Switchgears, Lt Panels, Internal Electrical Distribution Works, Substation Works, Retrofitting Work, Power Cabling, Earthing Works, Annual Maintenance Contract, Preventive Maintenance, Maintenance Work, Testing Works, Electrical Works For DG Sets, , HT Switchgears, LT Switchgears, L.T. Panels, Protection Systems, Power Factor Improvement, Electrical Audit, Battery Chargers, Overhead Line Works, General Facilities Drilling, Jigsaw, Cutting, Bending, Welding, Crimping, Tools, Tackles , >Licensed Electrical Contractor, HT / LT Switchgears, LT Panels, Distribution Transformers, Mumbai, India Civil contractors, fabrication contractors, pipe line and piping ,tank ,civil, civil work, fabrication, structural work, road concrete construction, drainage and plumbing work, pavar block installation',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safeline Electricals `,
        short_name: `safeline`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

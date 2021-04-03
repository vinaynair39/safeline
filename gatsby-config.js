require("dotenv").config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: "Safeline Electricals",
    titleTemplate: "Safeline Electricals",
    description:
      "A Grade Government Registered & Licensed Electrical Contractors, Engineers & Consultants. Safeline is one of the most trusted contractors from Mumbai, Maharashtra.",
    url: "https://safelineelectricals.in", // No trailing slash allowed!
    siteUrl: "https://safelineelectricals.in",
    locale: "en-IN",
    image: "/logo.png",
    keywords:
      "Electrical Contractors, Electrical Engineers, Electrical Consultants, Top commercial electrical contractors, Residential Electrical, Industrial Electrical Project services, Office Electrical Contractor Services, Commercial Electrical Contractor For IT Park, Contractor Services For Building, Govt. Licensed Electrical Contractor, Electrician business, 5 star electric, Electrical installation, Industrial Electrician, Local Electrical Contractor, Electrical Company, Electrical contractors in navi mumbai, electrical contractors in mumbai, electrical contractor website, electrical contract jobs, top electrical contractor, electrical contractor work, Electrical contractor in pune, contractor, contractor near me, contractor mumbai, contractor pune, contractor taloja, contractor maharashtra, Licensed Electrical Contractor, Govt Licensed Electrical Contractor, Government Registered Contractor, Switchgear, Best Electrical Contractor, Most Rated, Budget, Navi Mumbai, Switchgears & Spares, Transformers, Distribution Transformers, Voltage Switchgears, Lightning Arrestors, Pre Fabricated Substation, Compact Switchgears, Ht Switchgears, Lt Switchgears, Lt Panels, Internal Electrical Distribution Works, New Substation Works, Retrofitting Work, Power Cabling, Earthing Works, Annual Maintenance Contract, Preventive Maintenance, Maintenance Work, Testing Works, Electrical Works For DG Sets, Authorized Dealer For Areva Switchgear, Authorized Dealer For Schneider, H.T.Switchgears, L.T.Switchgears, L.T. Panels, Protection Systems, Power Factor Improvement, Electrical Audit, Battery Chargers, Overhead Line Works, General Facilities Drilling, Jigsaw, Cutting, Bending, Welding, Crimping, Tools, Tackles, india, indian, mumbai, navi Mumbai, industrial, industries, thane, pune, nashik, aurangabad, ratnagiri, nagpur, ahmednagar, akola, amravati, chandrapur, dhule, jalgaon, raigad, sangli, satara, belgaum, kolhapur, belgaon, Taloja, panvel, kamothane, maharashtra",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
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

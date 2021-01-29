const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const serviceTemplate = path.resolve("./src/templates/service.tsx");
  const projectTemplate = path.resolve("./src/templates/project.tsx");

  const res = await graphql(`
    query {
      allContentfulService(sort: { fields: [serialNumber], order: ASC }) {
        nodes {
          slug
        }
      }

      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `);

  res.data.allContentfulService.nodes.forEach(({ slug }) => {
    createPage({
      component: serviceTemplate,
      path: `/${slug}`,
      context: {
        slug: slug,
      },
    });
  });

  res.data.allContentfulProject.nodes.forEach(({ slug }) => {
    createPage({
      component: projectTemplate,
      path: `/projects/${slug}`,
      context: {
        slug: slug,
      },
    });
  });
};

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

async function makePostsFromMdx({ graphql, actions }) {
  const workPost = path.resolve('./src/templates/work.js');
  const { errors, data } = await graphql(
    `
      {
        allMdx(
          filter: { fields: { collection: { eq: "work" } } }
          sort: { order: ASC, fields: frontmatter___id }
        ) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );
  if (errors) {
    console.error(errors);
    throw new Error('There was an error');
  }
  const work = data.allMdx.edges;
  work.forEach(({ node }, i) => {
    const prev = work[i - 1] || null;
    const next = work[i + 1] || null;
    actions.createPage({
      path: node.fields.slug,
      component: workPost,
      context: {
        slug: node.fields.slug,
        collection: 'work',
        prev,
        next,
        pathPrefix: '',
      },
    });
  });
}

async function paginate({ graphql, actions, collection, pathPrefix, component }) {
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `,
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const { totalCount } = data.allMdx;
  const pages = Math.ceil(totalCount / 10);

  Array.from({ length: pages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    makePostsFromMdx({ graphql, actions }),
    // paginate({
    //   graphql,
    //   actions,
    //   collection: 'work',
    //   pathPrefix: '/work/',
    //   component: path.resolve('./src/templates/work.js'),
    // }),
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    console.log(node);
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode });
    console.table({ value: node.frontmatter.slug ? `/${node.frontmatter.slug}/` : generatedSlug });
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug ? `/${node.frontmatter.slug}` : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

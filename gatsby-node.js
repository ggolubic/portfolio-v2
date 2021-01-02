const path = require('path');

async function makePostsFromMd({ graphql, actions }) {
  const workPost = path.resolve('templates/work');
  const { errors, data } = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
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
    console.log(errors);
    throw new Error('There was an error');
  }
  const work = data.allMd.edges;
  work.forEach((post, i) => {
    const prev = work[i - 1];
    const next = work[i + 1];
    actions.createPage({
      path: post.node.fields.slug,
      component: workPost,
      context: {
        slug: post.node.fields.slug,
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
        allMarkdownRemark(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `,
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const { totalCount } = data.allMd;
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
    makePostsFromMd({ graphql, actions }),
    paginate({
      graphql,
      actions,
      collection: 'work',
      pathPrefix: '/work/',
      component: path.resolve('templates/work'),
    }),
  ]);
};

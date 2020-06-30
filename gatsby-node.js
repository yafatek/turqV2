/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const competitionTemplate = require.resolve(`./src/templates/competition.js`)
  const legislationTemplate = require.resolve(`./src/templates/legislation.js`)

  const pages = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: {frontmatter: {type: {eq: "page"}}}
      ) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)
  
  const legislation = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "//legislation//" }}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              competition
            }
          }
        }
      }
    }
  `)

  const competition = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "//contest//" }}
      ) {
        edges {
          node {
            id
            fields {
              slug
              name
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (competition.errors || legislation.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(
          `./src/templates/${String(node.frontmatter.template)}.js`
        ),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })

  legislation.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: legislationTemplate,
      context: {
        contest: node.frontmatter.competition,
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })

  competition.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: competitionTemplate,
      context: {
        slug: node.fields.slug,
        name: node.fields.name
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const name = getNode(node.parent).name.toString()
    createNodeField({
      name: `name`,
      node,
      value: name,
    })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemarkFrontmatter implements Node {
      other: String
      exceptions: String
    }
  `
  createTypes(typeDefs)
}
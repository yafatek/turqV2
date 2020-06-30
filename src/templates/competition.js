import React from "react"
import { graphql } from "gatsby"
import Competition from "../components/competition/competition"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allMarkdownRemark } = data 
  const { frontmatter, fields } = markdownRemark
  const { edges } = allMarkdownRemark
  return (
  <Layout>
    <SEO title={frontmatter.title} />
      <Competition
        title={frontmatter.title}
        endDate={frontmatter.endDate}
        prizes={frontmatter.prizes}
        description={frontmatter.description}
        rules={frontmatter.rules}
        criteria={frontmatter.criteria}
        legislation={edges}
        buttonLink={"/admin/#/collections/Draft-Legislation/new?competition=" + fields.name}
      />
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $name: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields{
        name
      }
      frontmatter {
        title
        endDate
        prizes
        description
        rules
        criteria
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/legislation//"}, frontmatter: {competition: {eq: $name}}}) {
      edges {
        node {
          id
          fields {
            slug
            name
          }
          frontmatter {
            title
            accomplishes
          }
        }
      }
    }
  }
`

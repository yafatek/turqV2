import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CompetitionList from "../components/competition/competitionList"

const CompetitionPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contests" />
      <div>
        <CompetitionList edges={edges} pageTitle="Contests"/>
      </div>
    </Layout>
  )
}

export default CompetitionPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/contest//" }}
      sort: { order: DESC, fields: [frontmatter___endDate] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            endDate
          }
        }
      }
    }
  }`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CompetitionList from "../components/competition/competitionList"
import {isPastEndDate } from "../util/dateCompare"

const CompetitionPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const currentContests = edges
    .filter(edge => !isPastEndDate(edge.node.frontmatter.endDate))
  const pastContests = edges
    .filter(edge => isPastEndDate(edge.node.frontmatter.endDate))

  return (
    <Layout>
      <SEO title="Contests" />
      <div>
        <CompetitionList title="Active Contests" edges={currentContests} />
      </div>
      <div className="mt-5">
        <CompetitionList title="Past Contests" edges={pastContests} />
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

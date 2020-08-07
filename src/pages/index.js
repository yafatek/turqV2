import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Explainer from "../components/explainer"
import CompetitionList from "../components/competition/competitionList"
import {isPastEndDate } from "../util/dateCompare"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const currentContests = edges
    .filter(edge => !isPastEndDate(edge.node.frontmatter.endDate))

  return (
  <Layout fullWidth>
    <SEO title="Home" />
    <div className="row">
      <Hero
        link="/about"
        header="Legislation for the people, by the people"
        buttonText="Learn More About Turq »"
        subtext="If you want better public policy, you need a legislative bill written. If you want a bill written, you have limited options. Either write it yourself, or get a politician to write it for you. But thousands of other constituents are also asking politicians to write them legislation everyday, and writing it yourself can be intimidating. Turq is the solution."/>
    </div>
    <div className="row">
      <Explainer id="HowItWorks"/>
    </div>
    <div className=" mt-5">
      <div className="col-9 mx-auto">
        <div className="content mx-auto">
          <CompetitionList edges={currentContests} title="Recent Contests"/>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default IndexPage

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

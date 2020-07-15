import React from "react"
import { graphql } from "gatsby"
import { Button } from 'react-bootstrap'
import { isPastEndDate } from "../util/dateCompare"
import LegislationList from "../components/legislation/legislationList"
import CompetitionText from "../components/competition/competitionText"
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
    <CompetitionText
      title={frontmatter.title}
      endDate={frontmatter.endDate}
      prizes={frontmatter.prizes}
      description={frontmatter.description}
      rules={frontmatter.rules}
      criteria={frontmatter.criteria}
    />
    <div className="row justify-content-center align-self-center">
      <div className="col mt-5">
        <Button
          variant={isPastEndDate(frontmatter.endDate) ? "secondary" : "turq"}
          size="lg"
          href={"/admin/#/collections/Draft-Legislation/new?competition=" + fields.name}
          disabled={isPastEndDate(frontmatter.endDate)}
        >
            Create New Legislation
        </Button>
      </div>
    </div>
    <br />
    <br />
    <div className="row">
      <div className="col mb-5">
        <h2>Legislation Submitted For This Contest</h2>
        <hr />
        <LegislationList legislation={edges}/>
      </div>
    </div>
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

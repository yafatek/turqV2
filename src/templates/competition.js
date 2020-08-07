import React from "react"
import { graphql } from "gatsby"
import { Button, Alert } from 'react-bootstrap'
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

  var pastEndDate = isPastEndDate(frontmatter.endDate)
  var alert;
  if (pastEndDate && !!frontmatter.legislatureLink) {
    alert =
    <Alert variant="info">
      <Alert.Heading>This Competition Has Ended!</Alert.Heading>
      <p className="mb-2"> The winning legislation is making it's way through the legislature now!  </p>
      <p className="my-0"> Check it out here: <a target="_blank" href={frontmatter.legislatureLink}>{frontmatter.legislatureLink}</a></p>
    </Alert>
  } else if (pastEndDate) {
    alert =
    <Alert variant="info">
      <Alert.Heading>This Competition Has Ended!</Alert.Heading>
      <p className="mb-2"> The winning legislation is still being selected</p>
    </Alert>
  } else {
    alert = null
  }

  return (
  <Layout>
    <SEO title={frontmatter.title} />
    {alert}
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
        legislatureLink
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

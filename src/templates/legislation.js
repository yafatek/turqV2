
import React from "react"
import { graphql, Link } from "gatsby"
import { Button } from "react-bootstrap"
import Legislation from "../components/legislation/legislation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isPastEndDate } from "../util/dateCompare"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, fields } = markdownRemark
  const { edges } = allMarkdownRemark
  const contest = edges[0].node
  return (
  <Layout>
    <SEO title={frontmatter.title} />
      <Link to={contest.fields.slug}> {"< Back to " + contest.frontmatter.title + " Contest"}</Link>
      <br />
      <br />
      <Legislation
        title={frontmatter.title}
        chapter={frontmatter.chapter}
        section={frontmatter.section}
        accomplishes={frontmatter.accomplishes}
        terms={frontmatter.terms}
        purpose={frontmatter.purpose}
        provisions={frontmatter.provisions}
        competition={frontmatter.competition}
        other={frontmatter.other}
        exceptions={frontmatter.exceptions}
      />
      <Button
        variant={isPastEndDate(contest.frontmatter.endDate) ? "secondary" : "turq"}
        size="lg"
	target="_blank"
        href={"/admin/#/collections/Draft-Legislation/entries/" + fields.name}
        disabled={isPastEndDate(contest.frontmatter.endDate)}
      >
        Edit this Legislation
      </Button>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $contest: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        name
      }
      frontmatter {
          title
          chapter
          section
          accomplishes
          terms
          purpose
          provisions
          competition
          other
          exceptions
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/contest//"}, fields: {name: {eq: $contest}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            endDate
          }
        }
      }
    }
  }
`

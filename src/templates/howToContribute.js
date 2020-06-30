import React from "react"
import { graphql, Link} from "gatsby"
import { Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
  <Layout>
    <SEO title="How To Contribute" />
    <div dangerouslySetInnerHTML={{__html: html}} />
    <Link to="/contest"><Button variant="turq" size="lg">View Contests</Button></Link>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

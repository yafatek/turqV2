import React from "react"
import { graphql } from "gatsby"
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
    <SEO title="About" />
    <div dangerouslySetInnerHTML={{__html: html}} />
    <Button variant="turq" size="lg" href="/admin/#/collections/Contests/new">Create a New Contest!</Button>
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

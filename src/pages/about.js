import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout fullWidth>
    <SEO title="About" />
    <div className="row about-header pt-5">
      <div className="col text-center">
        <h1 className="about-title">About Turq</h1>
      </div>
    </div>
    <div className="row about-header pb-5">
      <div className="col text-center">
        <p className="about-subtitle">
          We're bringing democracy back to the people
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 mx-auto text-center">
        <p className="about-text">
        Turq's mission is to make direct democracy viable by enabling citizens to draft and submit their own legislation. Our goal is to alleviate the pressure on legislators by enabling citizens to write bills for one another.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage

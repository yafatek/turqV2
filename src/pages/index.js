import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Explainer from "../components/explainer"
import HowItWorks from "../components/howItWorks"

const IndexPage = () => (
    <>
      <Header />
      <SEO title="Turq.io" />
      <Hero
        link="/about"
        header="Legislation for the people, by the people"
        buttonText="Learn More »"
        subtext="If you want better public policy, you need a legislative bill written. If you want a bill written, you have limited options. Either write it yourself, or get a politician to write it for you. But thousands of other constituents are also asking politicians to write them legislation everyday, and writing it yourself can be intimidating. Turq is the solution."/>
      <Explainer id="HowItWorks"/>
      <HowItWorks />
    </>
)

export default IndexPage

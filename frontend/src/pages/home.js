import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Explainer from "../components/explainer"

function Home () {
  return (
  <Layout fullWidth>
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
        </div>
      </div>
    </div>
  </Layout>
)
}

export default Home

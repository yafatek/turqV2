import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import NumberCircleTile from "./numberCircleTile"

const HowItWorks = ({id}) => (
<section id={id}>
  <div className="container-fluid panel-left">
    <div className="row">
      <div className="col-10 mx-auto mt-5">
        <h2> How It Works </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-10 mx-auto">
      </div>
    </div>
    <div className="row">
      <div className="col-10 mt-3 mx-auto">
        <Tabs defaultActiveKey="Drafters">
          <Tab eventKey="Drafters" title="Drafters">
            <div className="row mb-5 mt-4 mx-auto">
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Select"
                  number="1"
                  detail="Find a contest that interests you"
                  primary={false}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Review"
                  number="2"
                  detail="Review the contest details and writing guides"
                  primary={false}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Draft"
                  number="3"
                  detail="Begin writing new legislation or make edits to existing content"
                  primary={false}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Win"
                  number="4"
                  detail="Receive the contest award when the sponsor accepts your legislation"
                  primary={false}
                />
              </div>
            </div>
          </Tab>
          <Tab eventKey="Sponsors" title="Sponsors">
            <div className="row mb-5 mt-4 mx-auto">
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Identify"
                  number="1"
                  detail="Identify a change you would like to see made to the legal code"
                  primary={true}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Propose"
                  number="2"
                  detail="Create a contest and determine the amount of the reward"
                  primary={true}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Review"
                  number="3"
                  detail="Review submitted legislation according to your contest criteria"
                  primary={true}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <NumberCircleTile
                  title="Award"
                  number="4"
                  detail="Select the legislation that best fits your criteria and award the prize to the drafter(s)"
                  primary={true}
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</section>
)

export default HowItWorks

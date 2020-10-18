import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import Layout from "../components/layout/layout"
import NumberCircleTile from "../components/numberCircleTile"
import { EDITOR_PAGE_URL } from "../constants"

const SponsorPage = () => (
  <Layout>
    <div className="row about-header">
      <div className="col text-center">
        <h1 className="about-title">Sponsoring a Competition</h1>
      </div>
    </div>
    <div className="row about-header pb-2">
      <div className="col text-center">
        <p className="about-subtitle">
          Bring your legislative dream to reality with the help of others
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col mx-auto">
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
      </div>
    </div>
    <Link to={EDITOR_PAGE_URL + "/contest"}
    >
      <Button variant="contained" color="primary" size="lg">Create a New Contest!</Button>
    </Link>
  </Layout>
)

export default SponsorPage

import React from "react"
import ReactMarkdown from "react-markdown";
import { useStaticQuery, graphql } from "gatsby"
import { Button } from 'react-bootstrap'
import CompetitionTitle from "./competitionTitle"
import LegislationList from "../legislation/legislationList"
import { isPastEndDate } from "../../util/dateCompare"

function Competition ({title, prizes, description, rules, criteria, endDate, buttonLink, legislation}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            competitionRules
          }
        }
      }
    `
  )
  return (
      <>
          <div className="row">
            <div className="col">
              <header>
                <h1>
                  <CompetitionTitle title={title} endDate={endDate}/>
                </h1>
                <p>
                  Competition Close: {new Date(parseInt(endDate)).toDateString()}
                </p>
              </header>
              <h3 className="mt-4">Prizes</h3>
              {prizes}

              <h3 className="mt-4">Description</h3>
              <ReactMarkdown source={description} />

              <h3 className="mt-4">Rules</h3>
              <ReactMarkdown source={rules} />
              <ReactMarkdown source={site.siteMetadata.competitionRules} />

              <h3 className="mt-4">Judging Criteria</h3>
              <ReactMarkdown source={criteria} />
            </div>
          </div>

          <div className="row justify-content-center align-self-center">
            <div className="col mt-5">
              <Button variant={isPastEndDate(endDate) ? "secondary" : "turq"} size="lg" target="_blank" href={buttonLink} disabled={isPastEndDate(endDate)}>Create New Legislation</Button>
            </div>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col mb-5">
              <h2>Legislation Submitted For This Contest</h2>
              <hr />
              <LegislationList legislation={legislation}/>
            </div>
          </div>
    </>
  )
}

export default Competition

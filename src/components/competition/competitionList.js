import React from "react"
import CompetitionCard from "./competitionCard"
import {isPastEndDate } from "../../util/dateCompare"


const CompetitionList = ({edges, pageTitle}) => {
  const currentContests = edges
    .filter(edge => !isPastEndDate(edge.node.frontmatter.endDate))
    .map(edge => <CompetitionCard
                   title={edge.node.frontmatter.title}
                   slug={edge.node.fields.slug}
                   description={edge.node.frontmatter.description}
                   endDate={edge.node.frontmatter.endDate}
                   key={edge.node.id}
                 />)
  const pastContests = edges
    .filter(edge => isPastEndDate(edge.node.frontmatter.endDate))
    .map(edge => <CompetitionCard
                   title={edge.node.frontmatter.title}
                   slug={edge.node.fields.slug}
                   description={edge.node.frontmatter.description}
                   endDate={edge.node.frontmatter.endDate}
                   key={edge.node.id}
                 />)
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1>Active {pageTitle}</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        {currentContests}
      </div>
      <div className="row">
        <div className="col-5 mt-5">
          <h1>Past {pageTitle}</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        {pastContests}
      </div>
    </>
  )
}

export default CompetitionList

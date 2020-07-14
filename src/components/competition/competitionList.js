import React from "react"
import CompetitionCard from "./competitionCard"


const CompetitionList = ({title, edges}) => {
  const contests = edges
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
          <h1>{title}</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        {contests}
      </div>
    </>
  )
}

export default CompetitionList

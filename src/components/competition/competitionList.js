import React from "react"
import CompetitionCard from "./competitionCard"
import PropTypes from "prop-types"
import { CONTEST_PAGE_URL } from "../../constants"

const CompetitionList = ({title, contests}) => {
  const contestCards = contests
    .map(contest => <CompetitionCard
                   title={contest.title}
                   link={CONTEST_PAGE_URL + "/" + contest.id}
                   description={contest.description}
                   endDate={contest.endDate}
                   id={contest.id}
                   key={contest.id}
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
        {contestCards}
      </div>
    </>
  )
}

export default CompetitionList

CompetitionList.propTypes = {
  title: PropTypes.string,
  contests: PropTypes.array
}

CompetitionList.defaultProps = {
  title: "",
  contests: []
}
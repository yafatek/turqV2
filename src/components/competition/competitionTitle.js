import React from "react"
import {isPastEndDate } from "../../util/dateCompare"

function CompetitionTitle ({title, endDate}) {

  return (
    <span>
      { isPastEndDate(endDate) ? 'CLOSED - ' + title : title }
    </span>
  )
}

export default CompetitionTitle

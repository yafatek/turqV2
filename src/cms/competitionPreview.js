import React from "react"
import CompetitionText from "../components/competition/competitionText"

const CompetitionPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <CompetitionText
      title={data.title}
      prizes={data.prizes}
      description={data.description}
      endDate={data.endDate}
      rules={data.rules}
      criteria={data.criteria}
    />
  )
}

export default CompetitionPreview


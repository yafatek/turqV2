import React from "react"
import LegislationText from "../components/legislation/legislationText"

const LegislationPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <LegislationText
      title={data.title}
      chapter={data.chapter}
      section={data.section}
      accomplishes={data.accomplishes}
      terms={data.terms}
      purpose={data.purpose}
      provisions={data.provisions}
      other={data.other}
      exceptions={data.exceptions}
    />
  )
}

export default LegislationPreview


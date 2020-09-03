import React from "react"
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types"
import { DEFAULT_CONTEST_RULES } from "../../constants"

function CompetitionText ({title, prizes, description, rules, criteria, endDate}) {
  return (
      <>
          <div className="row contest-background p-2">
            <div className="col">
              <header>
                <h1>{title}</h1>
                <p>
                  Competition Close: {new Date(endDate).toDateString()}
                </p>
              </header>
              <h3 className="mt-4">Prizes</h3>
              {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(prizes)}

              <h3 className="mt-4">Description</h3>
              <ReactMarkdown source={description} />

              <h3 className="mt-4">Rules</h3>
              <ReactMarkdown source={rules} />
              <ReactMarkdown source={DEFAULT_CONTEST_RULES} />

              <h3 className="mt-4">Judging Criteria</h3>
              <ReactMarkdown source={criteria} />
            </div>
          </div>

    </>
  )
}

export default CompetitionText

CompetitionText.propTypes = {
  title: PropTypes.string,
  prizes: PropTypes.number,
  description: PropTypes.string,
  rules: PropTypes.string,
  criteria: PropTypes.string,
  endDate: PropTypes.string
}

CompetitionText.defaultProps = {
  title: "",
  prizes: 0,
  description: "",
  rules: "",
  criteria: "",
  endDate: "1970-1-1",
}
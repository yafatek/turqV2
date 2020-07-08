import React from "react"
import ReactMarkdown from "react-markdown";
import { useStaticQuery, graphql } from "gatsby"

function CompetitionText ({title, prizes, description, rules, criteria, endDate}) {
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
                <h1>{title}</h1>
                <p>
                  Competition Close: {new Date(parseInt(endDate)).toDateString()}
                </p>
              </header>
              <h3 className="mt-4">Prizes</h3>
              {"$" + prizes}

              <h3 className="mt-4">Description</h3>
              <ReactMarkdown source={description} />

              <h3 className="mt-4">Rules</h3>
              <ReactMarkdown source={rules} />
              <ReactMarkdown source={site.siteMetadata.competitionRules} />

              <h3 className="mt-4">Judging Criteria</h3>
              <ReactMarkdown source={criteria} />
            </div>
          </div>

    </>
  )
}

export default CompetitionText

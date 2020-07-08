import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";

function LegislationText ({title, chapter, section, accomplishes, terms, purpose, provisions, other, exceptions}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            legislationSubtext
          }
        }
      }
    `
  )
  return (
      <>
          <div className="row">
            <div className="col">
                <h1 className="legislation-title">{title}</h1>
                <p className="legislation-subtitle">{site.siteMetadata.legislationSubtext}</p>
                <p className="legislation-SectionTitle">SECTION 1 - { chapter }</p>
                <ReactMarkdown className="legislation-SectionText" source={ section } />
                <p className="legislation-SectionTitle">SECTION 1 - { title }</p>
                <ReactMarkdown className="legislation-SectionText" source={ accomplishes } />
                <p className="legislation-SectionTitle">SECTION 2 - DEFINITIONS</p>
                <ReactMarkdown className="legislation-SectionText" source={ terms } />
                <p className="legislation-SectionTitle">SECTION 3 - STATEMENT OF PURPOSE</p>
                <ReactMarkdown className="legislation-SectionText" source={ purpose } />
                <p className="legislation-SectionTitle">SECTION 4 - PROVISIONS</p>
                <ReactMarkdown className="legislation-SectionText" source={ provisions } />
                { exceptions
                    ? <>
                    <p className="legislation-SectionTitle">SECTION 5 - SPECIAL EXCEPTIONS</p>
                    <ReactMarkdown className="legislation-SectionText" source={ exceptions } />
                    </>
                    : null
                }
                { other
                  ? <>
                    <p className="legislation-SectionTitle">SECTION 6 - OTHER PROVISIONS</p>
                    <ReactMarkdown className="legislation-SectionText" source={ other } />
                  </>
                  : null
                }
            </div>
          </div>
    </>
  )
}

export default LegislationText 

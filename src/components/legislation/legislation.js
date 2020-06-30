import React from "react"

const Competition = ({title, chapter, section, accomplishes, terms, purpose, provisions, other, exceptions}) =>
  (
      <>
          <div className="row">
            <div className="col">
                SECTION 1 - { chapter }
                <br />
                <br />
                { section }
                <br />
                <br />
                SECTION 1 - { title }
                <br />
                <br />
                { accomplishes }
                <br />
                <br />
                SECTION 2 - DEFINITIONS
                <br />
                <br />
                { terms }
                <br />
                <br />
                SECTION 3 - STATEMENT OF PURPOSE
                <br />
                <br />
                { purpose }
                <br />
                <br />
                SECTION 4 - PROVISIONS
                <br />
                <br />
                { provisions }
                <br />
                <br />
                { exceptions ?
                    <>
                    SECTION 5 - SPECIAL EXCEPTIONS
                    <br />
                    <br />
                    { exceptions }
                    <br />
                    <br />
                    </>
                    : null
                }
                { other ?
                  <>
                    SECTION 6 - OTHER PROVISIONS
                    <br />
                    <br />
                    { other }
                    <br />
                    <br />
                  </>
                : null
                }
            </div>
          </div>
    </>
  )

export default Competition

import React from "react"
import Layout from "../components/layout"
import NumberCircleTile from "../components/numberCircleTile"

const DrafterPage = () => (
  <Layout>
    <div className="row about-header">
      <div className="col text-center">
        <h1 className="about-title">How To Draft Legislation</h1>
      </div>
    </div>
    <div className="row about-header pb-2">
      <div className="col text-center">
        <p className="about-subtitle">
          Help others to bring their legislative dream to reality
        </p>
      </div>
    </div>
    <div className="row mb-5 mt-4 mx-auto">
      <div className="col-12 col-md-6 col-lg-3 mt-3">
        <NumberCircleTile
          title="Select"
          number="1"
          detail="Find a contest that interests you"
          primary={false}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mt-3">
        <NumberCircleTile
          title="Review"
          number="2"
          detail="Review the contest details and writing guides"
          primary={false}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mt-3">
        <NumberCircleTile
          title="Draft"
          number="3"
          detail="Begin writing new legislation or make edits to existing content"
          primary={false}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mt-3">
        <NumberCircleTile
          title="Win"
          number="4"
          detail="Receive the contest award when the sponsor accepts your legislation"
          primary={false}
        />
      </div>
    </div>
    <div className="row">
      <div className="col mx-auto">
        <h3>Drafting Guidelines</h3>
        <ul>
          <li>
            <b>Simplicity</b> - Select short, familiar words and phrases that best express the intended meaning according to common and approved usage. Avoid “legalese.”The language of a statute should be dignified, not pompous.Examples: Use “after”, instead of "subsequent to;" use "before" instead of "prior to."
          </li>
          <li>
           <b>Conciseness</b> - Omit needless language and use the shortest sentence that conveys the intendedmeaning.
          </li>
          <li>
           <b>Consistency</b> - Be consistent in the use of language throughout the bill. Do not use the same word or phrase to convey different meanings. Do not use different language to convey the same meaning.
          </li>
          <li>
           <b>Directness</b> - If a concept can be expressed positively or negatively, express it positively.
          </li>
          <li>
           <b>Ordinary</b> English - Draft in ordinary English. Avoid words that might be considered slang. Also try to avoid using a complicated word when a simple word will convey the same concept.Generally do not use abbreviations and contractions.In rare instances where an abbreviation is used, insert a definition of the abbreviated term.
          </li>
          <li>
           <b>Appropriate</b> Material for Inclusion - It is usually best not to include material that has no legal effect in a bill.
          </li>
          <li>
           <b>Outdated</b> Terminology - Change or remove questionable, imprecise or outmoded words or terminology.Please check the names of state agencies as they occasionally change.
          </li>
          <li>
           <b>Novelty</b> - It isn't already covered by another section of the State Code.
          </li>
          <li>
           <b>Revision</b> - After completing the draft of a bill, revise it carefully and critically. Review each use of a defined term to make sure it is used consistently in its defined sense.
          </li>
          <li>
            <b>Approachable</b> - It can be understood by someone who's not an expert.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default DrafterPage

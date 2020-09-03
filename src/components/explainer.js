import React from "react"
import Panel from "./panel"
import pen from "../images/pen.png"
import contract from "../images/contract.png"

const Explainer = ({id}) => (
<section id={id} className="mx-auto">
  <div className="explainer container-fluid">
    <div className="row">
      <div className="sponsor-panel col-12 col-md-6">
        <Panel
        title="Sponsor a Contest"
        buttonText="Create A Contest »"
        link="/sponsor"
        imgSrc={contract}
        altTxt="award"
        subtitle="If you want some legislation made, become a Sponsor and fund a bill writing contest for others to draft your legislation for you." />
      </div>
      <div className="drafter-panel col-12 col-md-6">
        <Panel
        title="Draft Legislation"
        buttonText="View Drafting Guidelines »"
        link="/drafter"
        imgSrc={pen}
        altTxt="Pen"
        subtitle="If you want to help bring someone's legislative dreams into reality, become a Drafter and make some money along the way" />
      </div>
    </div>
  </div>
</section>
)

export default Explainer

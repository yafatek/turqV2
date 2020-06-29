import React from "react"
import Panel from "./panel"

const Explainer = ({id}) => (
<section id={id}>
  <div className="explainer container-fluid">
    <div className="row">
      <div className="panel-left col-12 col-md-6">
        <Panel
        title="draft legislation"
        buttonText="Learn More »"
        link="/howToContribute"
        imgSrc="https://img.icons8.com/pastel-glyph/64/000000/ball-point-pen.png"
        altTxt="Pen"
        subtitle="If you want to help bring someone's legislative dreams into reality, become a Drafter and make some money along the way" />
      </div>
      <div className="panel-right col-12 col-md-6">
        <Panel
        title="sponsor a competition"
        buttonText="Learn More »"
        link="/sponsor"
        imgSrc="https://img.icons8.com/ios-glyphs/64/000000/contract.png"
        altTxt="award"
        subtitle="If you want some legislation made, become a Sponsor and fund a bill writing contest for others to draft your legislation for you." />
      </div>
    </div>
  </div>
</section>
)

export default Explainer

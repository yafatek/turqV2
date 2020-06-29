import React from "react"
import { Tab, Tabs } from "react-bootstrap"

const HowItWorks = ({id}) => (
<section id={id}>
  <div className="container-fluid panel-left">
    <div className="row">
      <div className="col-10 mx-auto mt-5">
        <h2> How It Works </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-10 mx-auto">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-10 mt-3 mx-auto">
        <Tabs defaultActiveKey="Drafters">
          <Tab eventKey="Drafters" title="Drafters">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </p>
          </Tab>
          <Tab eventKey="Sponsors" title="Sponsors">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</section>
)

export default HowItWorks

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/about/team"
import Vision from "../components/about/vision"
import Story from "../components/about/process"


class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {view: "story" }
  }

  changeView = (newView) => {
    this.setState({view: newView})
  }

  getClassNames = (view) => {
    return "col-12 col-md-2 col-xl-1 text-center my-auto about-header-text " + (this.state.view === view ? "about-text-highlight" : "" );
  }

  renderPage(view) {
    switch(view) {
      case 'team':
        return <Team />;
      case 'vision':
        return <Vision />;
      default:
        return <Story />;
    }
  }

  render() {
    return <Layout fullWidth>
      <SEO title="About" />
      <div className="row">
        <div className={"col-12 mx-auto"}>
          <div className="row">
            <div className="col text-center">
              <h1 className="about-title">Turq</h1>
            </div>
          </div>
          <div className="row about-header">
            <div className="col text-center">
              <p className="about-subtitle">
                We're bringing democracy back to the people
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-task">
        <button onClick={() => {this.changeView("team") }}  className={this.getClassNames("team") + " ml-auto"}>
          <h4>Our Team</h4>
        </button>
        <button onClick={() => {this.changeView("story") }} className={this.getClassNames("story")}>
          <h4>Our Process</h4>
        </button>
        <button onClick={() => {this.changeView("vision") }} className={this.getClassNames("vision") + " mr-auto"}>
          <h4>Our Vision</h4>
        </button>
      </div>
      <div className="row">
        <div className={"col-12 mx-auto"}>
          {this.renderPage(this.state.view)}
        </div>
      </div>
    </Layout>
  }
}

export default AboutPage

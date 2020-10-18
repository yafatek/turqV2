import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout/layout"
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
    return "about-header-text " + (this.state.view === view ? "about-text-highlight" : "" );
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
    return (
    <Layout fullWidth pageTitle="Turq | About" description="Turq's mission is to make direct democracy viable by enabling citizens to draft and submit their own legislation">
      <Grid container alignItems="flex-start" direction="column">
        <Grid item container direction="row" className="about-task" justify="center" alignItems="center">
          <Grid item xs={2}>
            <Typography align="center">
              <button onClick={()=> {this.changeView("team") }}  className={this.getClassNames("team")}>
                <h4>Our Team</h4>
              </button>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">
              <button onClick={() => {this.changeView("story") }} className={this.getClassNames("story")}>
                <h4>Our Process</h4>
              </button>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">
              <button onClick={() => {this.changeView("vision") }} className={this.getClassNames("vision")}>
                <h4>Our Vision</h4>
              </button>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            {this.renderPage(this.state.view)}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )}

}

export default AboutPage

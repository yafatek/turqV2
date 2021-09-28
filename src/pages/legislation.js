import React from "react"
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

import LegislationText from "../components/legislation/legislationText"
import LegislationEditCard from "../components/legislation/legislationEditCard"
import Layout from "../components/layout/layout"
import { fetchLegislation } from '../actions/legislationActions'

class LegislationPage extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchLegislation(this.props.match.params.id))
  }

  render() {
    var legislation = this.props.legislation

    return (
      <Layout pageTitle={`Legislation ${this.props.match.params.id}`}>
        {legislation ?
          <Grid container direction="column" style={{padding:20}}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs={12} md={8}>
                <LegislationText
                  title={legislation.title}
                  content={legislation.content}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                {this.props.isAuthenticated
                ? <LegislationEditCard legislation={legislation}/>
                : <></> }
              </Grid>
            </Grid>
          </Grid>
          : <></> }
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  var { legislation, auth } = state
  legislation = legislation.legislation

  const { isAuthenticated, email } = auth

  return {
    legislation,
    isAuthenticated,
    email
  }
}

export default connect(mapStateToProps)(LegislationPage)
import React from "react"
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout/layout"
import ContestPanelList from "../components/competition/contestPanelList"
import { fetchAllContests } from '../actions/contestActions'
import {isPastEndDate } from "../util/dateCompare"

class ContestPage extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchAllContests())
  }

  render() {
    var currentContests = []
    var pastContests = []
    if (this.props.allContests) {
      currentContests = this.props.allContests 
        .filter(contest => !isPastEndDate(contest.endDate))
      pastContests = this.props.allContests
        .filter(contest => isPastEndDate(contest.endDate))
    }

    return (
      <Layout>
        {this.props.allContests
          ? <>
            <Grid container>
              <Grid item xs={12}>
                <ContestPanelList title="Active Issues" contests={currentContests} />
              </Grid>
              <Grid item xs={12}>
                <ContestPanelList title="Past Issues" contests={pastContests} />
              </Grid>
            </Grid>
          </>
          : <></>
        }
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  const { contest } = state
  const { allContests, isFetching } = contest

  return {
    allContests,
    isFetching
  }

}


export default connect(mapStateToProps)(ContestPage)
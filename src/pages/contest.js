import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout/layout"
import { fetchContest, updateContestStatus } from "../actions/contestActions"
import DismissableAlert from "../components/dismissableAlert"
import {isPastEndDate } from "../util/dateCompare"
import ContestSubmissionsCard from "../components/competition/contestSubmissionsCard"
//import ContestFundingCard from "../components/competition/contestFundingCard"
import ItemizedFundingCard from "../components/competition/itemizedFundingCard"
import ContestShareCard from "../components/competition/contestShareCard"
import ContestStateCard from "../components/competition/contestStateCard"
import CompetitionText from "../components/competition/competitionText"
import GoalRing from "../components/legislation/goalRing"
import { CONTEST_DATA_URL } from "../constants"
import Card from "@material-ui/core/Card"
import Link from "@material-ui/core/Link"

class ContestPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {legislationList: []}
    this.handleStatusUpdate = this._handleStatusUpdate.bind(this);
  }

  _handleStatusUpdate(statusId) {
    const contestId = this.props.match.params.id
    this.props.dispatch(updateContestStatus(contestId, statusId))
  }

  componentDidMount() {
    this.props.dispatch(fetchContest(this.props.match.params.id))
    //this.props.dispatch(fetchLegislationByContest(this.props.match.params.id))
    axios.get(CONTEST_DATA_URL + "/" + this.props.match.params.id + "/legislation")
      .then(res => {
        const legislationList = res.data;
        this.setState({...this.state, legislationList});
      }).catch(function (error) {
        toast.error("Unable to load legislation, plese try again in a few minutes");
      })
  }

  render() {
    var contest = this.props.contest
    var alert;

    if (contest) {
      var pastEndDate = isPastEndDate(contest.endDate)
      if (pastEndDate && !!contest.legislatureLink) {
        alert =
        <DismissableAlert variant="turq" heading="This Issue Has Been Closed!">
          <p className="mb-2"> The winning legislation is making it's way through the legislature now!  </p>
          <p className="my-0"> Check it out here: <a target="_blank" rel="noopener noreferrer" href={contest.legislatureLink}>{contest.legislatureLink}</a></p>
        </DismissableAlert>
      } else if (pastEndDate) {
        alert =
        <DismissableAlert variant="turq" heading="This Issue Has Been Closed!">
          <p className="mb-2"> The winning legislation is still being selected</p> </DismissableAlert>
      } else {
        alert = null
      }
    }

    return (
      <Layout  pageTitle={`Issue ${this.props.match.params.id}`}>
        {contest ?
          <Grid container justify="center" direction="column" style={{padding:20}}>
            <Grid item>
              {alert}
            </Grid>
            <Grid container justify="center" spacing={5}>
                <Grid item xs={12} md={8} >
                  <CompetitionText
                    title={contest.title}
                    prizes={contest.prize}
                    description={contest.description}
                    rules={contest.rules}
                    criteria={contest.criteria}
                    endDate={contest.endDate}
                  />
                </Grid>
                <Grid container item xs={12} md={4} style={{padding:34}}>
                  <Grid container item direction="column" spacing={5}>
                    <Grid container justify="center" align="center">
                      <Grid item>
                        <GoalRing currentFunding={contest.prize}/>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ItemizedFundingCard currentFunding={contest.prize} contestId={contest.id}/>
                    </Grid>
                    {contest.author.email === this.props.email || this.props.isAdmin ?
                      (<Grid item alignContent="center">
                        <Card style={{padding:"25px"}}>
                            <Link href={`/editor/contest/${contest.id}`} TypographyClasses={{root:"editIssueButton"}}>Edit This Issue</Link>
                        </Card>
                    </Grid>) : null}
                    <Grid item>
                      <ContestShareCard />
                    </Grid>
                    <Grid item>
                      <ContestStateCard currentStatus={contest.status} isAdmin={this.props.isAdmin} onSubmit={event => this.handleStatusUpdate(event)}/>
                    </Grid>
                    <Grid item>
                      <ContestSubmissionsCard contest={contest} legislationList={this.state.legislationList} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          : <></>
        }
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  var { contest, auth } = state
  contest = contest.contest
  
  return {
    contest,
    isAdmin: auth.isAdmin(),
    email:auth.fetchEmail()
  }
}

export default connect(mapStateToProps)(ContestPage)

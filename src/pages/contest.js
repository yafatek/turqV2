import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import { fetchContest } from "../actions/contestActions"
import DismissableAlert from "../components/dismissableAlert"
import {isPastEndDate } from "../util/dateCompare"
import LegislationList from "../components/legislation/legislationList"
import CompetitionText from "../components/competition/competitionText"
import { CONTEST_DATA_URL, EDITOR_PAGE_URL } from "../constants"

class ContestPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {legislationList: []}
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
        <DismissableAlert variant="turq" heading="This Competition Has Ended!">
          <p className="mb-2"> The winning legislation is making it's way through the legislature now!  </p>
          <p className="my-0"> Check it out here: <a target="_blank" rel="noopener noreferrer" href={contest.legislatureLink}>{contest.legislatureLink}</a></p>
        </DismissableAlert>
      } else if (pastEndDate) {
        alert =
        <DismissableAlert variant="turq" heading="This Competition Has Ended!">
          <p className="mb-2"> The winning legislation is still being selected</p>
        </DismissableAlert>
      } else {
        alert = null
      }
    }

    return (
      <Layout>
        {alert}
        {contest ? 
          <>
          <CompetitionText
            title={contest.title}
            prizes={contest.prize}
            description={contest.description}
            rules={contest.rules}
            criteria={contest.criteria}
            endDate={contest.endDate}
          />
          <div className="row justify-content-center align-self-center">
            <div className="col mt-3">
              <Link
                to={EDITOR_PAGE_URL + "/legislation?contest=" + contest.id}
              >

                {!isPastEndDate(contest.endDate)
                  ? <Button variant="turq" size="lg" > Create New Legislation </Button>
                  : null
                }
              </Link>
            </div>
          </div>
          <div className="row p-2 pt-3 mt-3 contest-legislation-list">
            <div className="col">
              <h2>Legislation Submitted For This Contest</h2>
              <hr />
              <LegislationList legislation={this.state.legislationList}/>
            </div>
          </div>
          </>
          : <></>
        }
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  var { contest } = state
  contest = contest.contest

  return {
    contest
  }
}

export default connect(mapStateToProps)(ContestPage)

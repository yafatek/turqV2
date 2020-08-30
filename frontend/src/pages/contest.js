import React from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import { Button, Alert } from "react-bootstrap"

import Layout from "../components/layout"
import {isPastEndDate } from "../util/dateCompare"
import LegislationList from "../components/legislation/legislationList"
import CompetitionText from "../components/competition/competitionText"
import { CONTEST_DATA_URL, EDITOR_PAGE_URL } from "../constants"

class ContestPage extends React.Component {

  componentDidMount() {
    axios.get(CONTEST_DATA_URL + "/" + this.props.match.params.id)
      .then(res => {
        const contest = res.data;
        this.setState({...this.state, contest});
      }).catch(function (error) {
        console.log(error);
      })
    axios.get(CONTEST_DATA_URL + "/" + this.props.match.params.id + "/legislation")
      .then(res => {
        const legislationList = res.data;
        this.setState({...this.state, legislationList});
      }).catch(function (error) {
        console.log(error);
      })
  }

  render() {
    var contest
    var alert;

    if (this.state && this.state.contest) {
      contest = this.state.contest
      var pastEndDate = isPastEndDate(contest.endDate)
      if (pastEndDate && !!contest.legislatureLink) {
        alert =
        <Alert variant="info">
          <Alert.Heading>This Competition Has Ended!</Alert.Heading>
          <p className="mb-2"> The winning legislation is making it's way through the legislature now!  </p>
          <p className="my-0"> Check it out here: <a target="_blank" rel="noopener noreferrer" href={contest.legislatureLink}>{contest.legislatureLink}</a></p>
        </Alert>
      } else if (pastEndDate) {
        alert =
        <Alert variant="info">
          <Alert.Heading>This Competition Has Ended!</Alert.Heading>
          <p className="mb-2"> The winning legislation is still being selected</p>
        </Alert>
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
                <Button
                  variant={isPastEndDate(contest.endDate) ? "secondary" : "turq"}
                  size="lg"
                  disabled={isPastEndDate(contest.endDate)}
                >
                    Create New Legislation
                </Button>
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

export default ContestPage

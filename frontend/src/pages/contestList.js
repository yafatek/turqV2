import React from "react"
import axios from "axios";
import Layout from "../components/layout"
import CompetitionList from "../components/competition/competitionList"
import {isPastEndDate } from "../util/dateCompare"
import { CONTEST_DATA_URL } from "../constants"

class ContestPage extends React.Component {
  
  componentDidMount() {
    axios.get(CONTEST_DATA_URL)
      .then(res => {
        const contests = res.data;
        this.setState({contests});
      }
    ).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    var currentContests = null 
    var pastContests = null 
    if (this.state && this.state.contests) {
      currentContests = this.state.contests 
        .filter(contest => !isPastEndDate(contest.endDate))
      pastContests = this.state.contests
        .filter(contest => isPastEndDate(contest.endDate))
    }

    return (
      <Layout>
        {currentContests && pastContests
        ? <>
          <div>
            <CompetitionList title="Active Contests" contests={currentContests} />
          </div>
          <div className="mt-5">
            <CompetitionList title="Past Contests" contests={pastContests} />
          </div>
        </>
        : <></>
        }
      </Layout>
    )
  }
}


export default ContestPage
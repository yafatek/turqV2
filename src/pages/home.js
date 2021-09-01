import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";

import ContestPanelList from "../components/competition/contestPanelList"
import { CONTEST_DATA_URL } from "../constants"
import Layout from "../components/layout/layout"
import Hero from "../components/hero"
import { isPastEndDate } from "../util/dateCompare"
import { CONTEST_PAGE_URL,POST_CONTEST_PAGE_URL } from '../constants'

class Home extends React.Component {

  componentDidMount() {
    axios.get(CONTEST_DATA_URL)
      .then(res => {
        const contests = res.data;
        this.setState({contests});
      }
    ).catch(function (error) {
      toast.error("Unable to load contest, plese try again in a few minutes");
    })
  }
  
  render() {
    var currentContests = null 
    if (this.state && this.state.contests) {
      currentContests = this.state.contests 
        .filter(contest => !isPastEndDate(contest.endDate))
    }
    return (
      <Layout fullWidth pageTitle="Turq">
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Hero
              link={POST_CONTEST_PAGE_URL}
              header="Imagine if change.org were actually effective."
              buttonText="Raise an Issue"
              subtext="That’s what Turq.io does. We help you get REAL legislation created, not just another petition."
            />
          </Grid>
          <Grid item xs={12} className="active-issue-section">
            {currentContests
            ? <ContestPanelList title="Explore Issues" contests={currentContests} size={9}/>
            : <></>
            }
          </Grid>
          <Grid item style={{padding: 10}}>
            <Link to={CONTEST_PAGE_URL}>
              <Button variant="contained" color="primary">View All Issues</Button>
            </Link>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default Home

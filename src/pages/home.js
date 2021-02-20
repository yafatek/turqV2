import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';

import ContestPanelList from "../components/competition/contestPanelList"
import { CONTEST_DATA_URL } from "../constants"
import Layout from "../components/layout/layout"
import Hero from "../components/hero"
import { isPastEndDate } from "../util/dateCompare"
import { CONTEST_PAGE_URL } from '../constants'

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
      <Layout fullWidth>
        <Grid container>
          <Grid item>
            <Hero
              link={CONTEST_PAGE_URL}
              header="Lawmakers Are Overwhelmed"
              buttonText="View Our Open Issues »"
              subtext="More calls and emails don’t solve anything. What lawmakers need is to be given a ready made piece of legislation. At turq.io we make that happen. We connect you with people that will solve your issue and turn the solution into legislation. Think Upwork, but for legislation. We then help you get that legislation submitted to the right place. Your problems are solved and lawmakers lives are made simpler."
            />
          </Grid>
          <Grid item xs={12}>
            {currentContests
            ? <ContestPanelList title="Active Issues" contests={currentContests} />
            : <></>
            }
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default Home

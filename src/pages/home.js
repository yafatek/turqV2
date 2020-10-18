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
              header="Support Signature Ready Legislation"
              buttonText="View Our Open Issues »"
              subtext="Our platform funds a network of citizen lawmakers who draft signature ready Legislation for State and local Legislatures. Turq takes the pressure off representatives by offloading the writing of Legislation to a network of citizens lawmakers. We then pipeline that Legislation into your State or local Legislature. The result is that Representatives have no constraints on serving the needs of all their constituents."
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

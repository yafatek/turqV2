import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";

import Layout from "../components/layout/layout"
import { resetPayment } from "../actions/paymentsActions"
import { fetchAllContests } from "../actions/contestActions"
import { HOME_PAGE_URL } from "../constants"
import ContestPanelList from "../components/competition/contestPanelList"

  
function PaymentThankyou({dispatch, allContests}) {

  useEffect(() => {
    dispatch(resetPayment())
    dispatch(fetchAllContests())
  }, [dispatch]);


  return(
    <Layout fullWidth>
      <Grid container style={{padding: 20}}>
        <Grid container item direction="column" spacing={10} justify="center" alignItems="center" style={{margin: 40}}>
          <Typography variant="h2" color="textPrimary" component="h2" align="center">
            Thank you for your support!
          </Typography>
        </Grid>
        <Grid container item direction="column" spacing={0} justify="center" alignItems="center" style={{padding: 10}}>
          <Grid item>
            <Link to={HOME_PAGE_URL}>
              <Button variant="contained" color="primary">Return to Home Page</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ContestPanelList title="Explore More Issues" contests={allContests} size={3}/> 
        </Grid>
      </Grid>
    </Layout>
  )
}

function mapStateToProps(state) {

  const { contest } = state
  const { allContests, isFetching } = contest

  return {
    allContests,
    isFetching
  }
}

export default connect(mapStateToProps)(PaymentThankyou)

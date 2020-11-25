import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

import Layout from "../components/layout/layout"
import { resetPayment } from "../actions/paymentsActions"

  
function PaymentThankyou({dispatch}) {

  useEffect(() => {
    dispatch(resetPayment())
  }, [dispatch]);


  return(
    <Layout fullWidth>
      <Grid container style={{padding: 40}}>
        <Grid container item direction="column" spacing={10} justify="center" alignItems="center" style={{padding: 20}}>
          <Typography variant="h2" color="textPrimary" component="h2" align="center">
            Thank you for your support!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default connect()(PaymentThankyou)
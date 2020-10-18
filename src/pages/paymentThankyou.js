import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout/layout"

  
function PaymentThankyou() {

  return(
    <Layout fullWidth>
      <Grid container style={{padding: 40}}>
        <Grid container item direction="column" spacing={10} justify="center" alignItems="center" style={{padding: 20}}>
          <Typography variant="H1" color="textPrimary" component="h1" align="center">
            Thank you for your support!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PaymentThankyou
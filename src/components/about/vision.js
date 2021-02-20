import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Vision = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6} style={{marginTop: 30}}>
        <Typography variant="subtitle1" color="textPrimary" component="p" align="left" paragraph>
          Lawmakers are overwhelmed and don’t have the time to make all the legislation that is needed of them. Our focus is to alleviate the pressure on legislators by enabling citizens to write bills for one another. We get that legislation made and submitted for you to make the ask of elected lawmakers as lightweight as possible.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Vision

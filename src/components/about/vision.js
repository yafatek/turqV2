import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Vision = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6} style={{marginTop: 30}}>
        <Typography variant="subtitle1" color="textPrimary" component="p" align="left" paragraph>
          Turq's mission is to make direct democracy viable by enabling citizens to draft and submit their own legislation. Our focus is on alleviating the pressure on legislators by enabling citizens to write bills for one another.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Vision

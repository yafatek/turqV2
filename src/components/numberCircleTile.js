import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';

const NumberCircleTile = ({number, title, detail, primary}) => (
  <Grid container spacing={2}>
    <Grid container item xs={12} justify="flex-start">
      <Grid item xs={12} md={3}>
        <span className={`numberCircle float-left background-${ primary ? "primary" : "secondary" }`}>{number}</span>
      </Grid>
      <Grid item xs={7}>
        <h2 className="my-auto ml-4">{title}</h2>
      </Grid>
    </Grid>
    <Grid item xs={12}>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
        {detail}
      </Typography>
    </Grid>
  </Grid>
)

export default NumberCircleTile

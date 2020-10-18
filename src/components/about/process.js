import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Process = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6} style={{marginTop: 30}}>
        <Typography variant="h4" color="textPrimary" component="h4" align="left" paragraph>
          Supporting Signature Ready Legislation
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
          Our platform funds a network of citizen lawmakers who draft signature ready Legislation for State and local Legislatures.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
          Representatives are deluged with citizen requests for Legislation. They simply can’t keep up. Which means if a citizen requests Legislation, chances are it’ll get lost in the shuffle.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
          Therefore asking your State Representative to invest time, energy, and resources into understanding your problem, finding a solution, and then authoring the Bill to implement your solution often leads to nothing. They simply don’t have the time. We solve this problem.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
          Turq takes care of all of this for Representatives by offloading the writing of Legislation to a network of citizens lawmakers. We then pipeline that Legislation into your State or local Legislature. The result is that Representatives have no constraints on serving the needs of all their constituents.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p" align="left" paragraph>
          Do you wish to join our network of citizen lawmakers? Register on our platform and start getting experience writing signature ready legislation for your fellow citizens! Let’s discover true democracy.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Process

import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Share } from 'react-twitter-widgets'

import { TWITTER_SHARE_TEXT } from "../../constants"

const ContestSubmissionsCard = () => (
  <Card height="100%">
    <CardContent>
      <Typography variant="h4" color="textSecondary" component="h2">
        Share this Issue!
      </Typography>
    </CardContent>
    <CardActions>
      <span style={{paddingLeft:8}} >
        <Share
          url={window.location.href}
          options={{
            text: TWITTER_SHARE_TEXT,
            size: "large",
            hashtags: "Turq,democracy",
            related: "Turqpbc"
          }}
        />
      </span>
    </CardActions>
  </Card>
)

export default ContestSubmissionsCard
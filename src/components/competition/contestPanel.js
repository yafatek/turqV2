import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import Truncate from "react-truncate"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Share } from 'react-twitter-widgets'

import { TWITTER_SHARE_TEXT } from "../../constants"

const ContestPanel = ({title, link, description, buttonText, funding}) => (
  <Card>
    <CardContent>
      <Grid Container>
        <Grid container>
          <Grid item xs={10}>
            <Typography gutterBottom  variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              <Truncate lines={5} ellipsis={<div>... </div>}>
                {description}
              </Truncate>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography gutterBottom  variant="h5" component="div" align="right">
              {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(funding/100)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Link to={link}>
        <Button  color="primary">{buttonText}</Button>
      </Link>
      <Share
        url={window.location.href}
        options={{
          text: TWITTER_SHARE_TEXT,
          size: "large",
          hashtags: "Turq,democracy",
          related: "Turqpbc"
        }}
      />
    </CardActions>
  </Card>
)

export default ContestPanel

ContestPanel.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  funding: PropTypes.number
}

ContestPanel.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: "",
  buttonText: "View Issue",
  funding: 0.00
}
import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import Truncate from "react-truncate"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ContestPanel = ({title, link, description, left, buttonText}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom  variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        <Truncate lines={5} ellipsis={<div>... </div>}>
          {description}
        </Truncate>
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={link}>
        <Button  color="primary">{buttonText}</Button>
      </Link>
    </CardActions>
  </Card>
)

export default ContestPanel

ContestPanel.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  left: PropTypes.bool,
  buttonText: PropTypes.string
}

ContestPanel.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: "",
  left: true ,
  buttonText: "View Issue"
}
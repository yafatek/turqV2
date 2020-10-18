import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Truncate from "react-truncate"
import PropTypes from "prop-types"


const CompetitionCard = ({title, id, description, link}) => (
<div className="col-12 col-md-6 col-lg-4 mt-4">
  <Link to={link} className="unstyled-link">
    <Card className="competition-card">
      <Card.Header className="competition-card-header">
        <h4>
          <Truncate lines={2}>
            {title}
          </Truncate>
        </h4>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Truncate lines={5} ellipsis={<span>... </span>}>
            {description}
          </Truncate>
        </Card.Text>
      </Card.Body>
    </Card>
  </Link>
</div>
)

export default CompetitionCard

CompetitionCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string
}

CompetitionCard.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: ""
}
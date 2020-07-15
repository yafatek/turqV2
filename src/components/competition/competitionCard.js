import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import Truncate from "react-truncate"


const CompetitionCard = ({title, slug, description, endDate}) => (
<div className="col-12 col-md-6 col-lg-4 mt-4">
  <Link to={slug} className="unstyled-link">
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

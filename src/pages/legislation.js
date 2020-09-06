import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import LegislationText from "../components/legislation/legislationText"
import Layout from "../components/layout"
import { isPastEndDate } from "../util/dateCompare"
import { CONTEST_PAGE_URL, EDITOR_PAGE_URL } from "../constants"
import { fetchLegislation } from '../actions/legislationActions'

class LegislationPage extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchLegislation(this.props.match.params.id))
  }

  render() {
    var legislation = this.props.legislation

    return (
      <Layout>
        {legislation
        ? <>
          <Link to={CONTEST_PAGE_URL + "/" + legislation.contest.id}> {"< Back to " + legislation.contest.title + " Contest"}</Link>
          <br />
          <br />
          <LegislationText
            title={legislation.title}
            chapter={legislation.chapter}
            section={legislation.section}
            accomplishes={legislation.accomplishes}
            terms={legislation.terms}
            purpose={legislation.purpose}
            provisions={legislation.provisions}
            competition={legislation.competition}
            other={legislation.other}
            exceptions={legislation.exceptions}
          />
          <Link 
            to={EDITOR_PAGE_URL + "/legislation/" + legislation.id}
          >
            <Button
              className="mt-3"
              variant={isPastEndDate(legislation.contest.endDate) ? "secondary" : "turq"}
              size="lg"
              disabled={isPastEndDate(legislation.contest.endDate)}
            >
            Contribute to this Legislation
            </Button>
          </Link>
          </>
          : <></>}
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  var { legislation } = state
  legislation = legislation.legislation

  return {
    legislation
  }
}

export default connect(mapStateToProps)(LegislationPage)
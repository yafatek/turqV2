
import React from "react"
import { Button } from "react-bootstrap"
import axios from "axios"
import { Link } from "react-router-dom"
import LegislationText from "../components/legislation/legislationText"
import Layout from "../components/layout"
import { isPastEndDate } from "../util/dateCompare"
import { LEGISLATION_DATA_URL, CONTEST_PAGE_URL, EDITOR_PAGE_URL } from "../constants"

class LegislationPage extends React.Component {

  componentDidMount () {
    axios.get(LEGISLATION_DATA_URL + "/" + this.props.match.params.id)
    .then(res => {
      const legislation = res.data;
      this.setState({legislation})
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {

    var legislation
    if (this.state && this.state.legislation) {
      legislation = this.state.legislation
    }

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

export default LegislationPage
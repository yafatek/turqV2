import React from "react"
import PropTypes from "prop-types"
import ContestPanel from "./contestPanel"
import { CONTEST_PAGE_URL } from "../../constants"
import Grid from '@material-ui/core/Grid';

const ContestPanelList = ({title, contests}) => {
  const contestCards = contests
    .map((contest, idx) =>
                <Grid container item xs={12} md={4} key={contest.id}>
                  <ContestPanel
                   title={contest.title}
                   description={contest.description}
                   link={CONTEST_PAGE_URL + "/" + contest.id}
                   //This acts as a way to flip the color left-right color scheme every row
                   left={idx % 4 === 0 || idx % 4 === 3}
                   funding={contest.prize}
                  />
                </Grid>)
  return (
    <div style={{padding:20}}>
      <Grid container spacing={5} direction="column" style={{padding:20}}>
        <Grid item>
          <h1>{title}</h1>
          <hr/>
        </Grid>
        <Grid container item spacing={5}>
          {contestCards}
        </Grid>
      </Grid>
    </div>
  )
}

export default ContestPanelList

ContestPanelList.propTypes = {
  title: PropTypes.string,
  contests: PropTypes.array
}

ContestPanelList.defaultProps = {
  title: "",
  contests: []
}
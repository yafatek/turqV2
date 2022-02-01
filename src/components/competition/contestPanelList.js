import Grid from '@material-ui/core/Grid';
import {MDBCardGroup, MDBContainer} from "mdbreact";
import PropTypes from "prop-types"
import React from "react"

import {CONTEST_PAGE_URL} from "../../constants"
import {dynamicSort} from "../../util/sort"

import ContestPanel from "./contestPanel"

const ContestPanelList = ({title, contests, size}) => {
    var contestCards = contests || [];
    if (size > -1) {
        contestCards = contests.slice(0, size);
    }
    contestCards = contestCards.sort(dynamicSort('-prize')).map((contest, idx) => <Grid container item
        xs={12}
        md={4}
        key={contest.id}
        >
        <ContestPanel title={
                contest.title
            }
            link={
                CONTEST_PAGE_URL + "/" + contest.id
            }
            //This acts as a way to flip the color left-right color scheme every row
            left={
                idx % 4 === 0 || idx % 4 === 3
            }
            funding={
                contest.prize
            }/>
    </Grid>)
    return (
        <Grid container direction="column"
            style={
                {padding: 10}
        }>
          
            <MDBContainer style={
                {
                    display: 'flex',
                    justifyContent: 'center'
                }

            }>
                <MDBCardGroup className='clearfix' 
                    style={
                        {padding: 0}
                    }
                    deck>
                    {contestCards} </MDBCardGroup>
            </MDBContainer>
        </Grid>
    )
}

export default ContestPanelList

ContestPanelList.propTypes = {
    title: PropTypes.string,
    contests: PropTypes.array,
    size: PropTypes.number
}

ContestPanelList.defaultProps = {
    title: "",
    contests: [],
    size: -1
}

import React from "react"
import Typography from "@material-ui/core/Typography"

const FundingDisclaimer = (props) => {
    return (
        <div hidden={props.value !== props.index} className="fundingDisclaimer">
            <Typography variant="h3" classes={{root:"issueDescriptionDisclaimerHeader"}}>
                Funding
            </Typography>
            <Typography variant="body1" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            This contribution will go toward compensating the person who creates your legislation, and the platform to get it sent to the right place.
            </Typography>
        </div>
    )
}

export default FundingDisclaimer
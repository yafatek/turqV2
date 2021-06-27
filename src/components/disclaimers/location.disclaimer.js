import React from "react"
import Typography from "@material-ui/core/Typography"

const LocationDisclaimer = (props) => {
    return (
        <div hidden={props.value !== props.index} className="issueDescriptionDisclaimer">
            <Typography variant="h3" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            Select the location you want a bill for
            </Typography>
            <Typography variant="body" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            Where you select as your location on concern will tell the legislation drafter what legislative format to use.
            </Typography>
        </div>
    )
}

export default LocationDisclaimer
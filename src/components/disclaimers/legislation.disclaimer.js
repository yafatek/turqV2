import React from "react"
import Typography from "@material-ui/core/Typography"

const LegislationDisclaimer = (props) => {
    return (
        <div hidden={props.value !== props.index} className="legislationDisclaimer">
            <Typography variant="h3" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            What legislation is needed?
            </Typography>
            <Typography variant="body1" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            Add just a little detail on what you think the legislation should accomplish
            </Typography>
        </div>
    )
}

export default LegislationDisclaimer
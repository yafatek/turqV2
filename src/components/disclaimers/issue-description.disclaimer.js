import React from "react"
import Typography from "@material-ui/core/Typography"
const IssueDescriptionDisclaimer = (props) => {
    return (
        <div hidden={props.value !== props.index} className="issueDescriptionDisclaimer">
            <Typography variant="h3" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            Describe the issue
            </Typography>
            <Typography variant="body" classes={{root:"issueDescriptionDisclaimerHeader"}}>
            Give background on why this is a problem, and what the potential improvmeents are.
            </Typography>
        </div>
    )
}

export default IssueDescriptionDisclaimer
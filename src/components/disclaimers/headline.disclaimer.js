import React from "react"
import Typography from "@material-ui/core/Typography"

const HeadlineDisclaimer = (props) => {
    return (
        <div className="headlineDisclaimer" hidden={props.value !== props.index}>
            <Typography variant="h3" classes={{root:"headlineDisclaimerHeader"}}>Let's start with a strong headline</Typography>
            <Typography variant="body1" classes={{root:"headlineDisclaimerHeader"}}>
                This helps grab people’s attention, resulting in more support, resolting in even better and faster legislation.
            </Typography>
        </div>
    )
}

export default HeadlineDisclaimer
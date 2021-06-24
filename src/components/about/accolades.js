import React from "react"
import Grid from "@material-ui/core/Grid"

import bCorpLogo from "../../images/bCorpLogo.png"
import YComb from "../../images/YComb.png"
import bostInno from "../../images/bostInno.png"
import channel7Logo from "../../images/channel7Logo.png"
import channel5Logo from "../../images/channel5Logo.png"

export const Accolades = () => {
    return(
        <Grid container justify="center">
            <Grid item container direction="row" justify="center" alignItems="center" style={{padding:"10px"}} >
                    <a href="https://bcorporation.net/about-b-corps">
                    <img src={bCorpLogo} alt="B Corp Logo" />
                    </a>
                    <a href="https://www.startupschool.org/companies/DPfRy9D0vLdCug">
                    <img src={YComb} alt="Y Combinator Logo"/>
                    </a>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" style={{padding:"10px"}} >
                    <a href="https://www.bizjournals.com/boston/inno/stories/profiles/2020/11/03/civic-tech-startup-turq-local-legislation-bills.html">
                    <img src={bostInno} alt="BostInno Logo"/>
                    </a>
                    <a href="https://whdh.com/sponsored-content/turq-io/">
                    <img src={channel7Logo} alt="Channel 7 Logo"/>
                    </a>
            </Grid>
            <img src={channel5Logo} alt="Channel 5 Logo"/>
        </Grid>
    )
}

export default Accolades
import React from "react"
import Grid from '@material-ui/core/Grid';
import AboutPanel from "./aboutPanel"
import Tim from "../../images/Tim_Wallis.jpeg"
import John from "../../images/John_Daley.jpeg"
import Michael from "../../images/Michael_Conlon.jpeg"

const Team = () => {
  const aboutTim = <div>
      <p> Tim | Co-Founder and CEO</p>
      <p> I ran for State Senate in North Carolina. That experience opened my eyes to the difficult nature of advancing causes in a system with such limited capacity.</p>
      <p> Check out my interview with BostInno [here](https://www.bizjournals.com/boston/inno/stories/profiles/2020/11/03/civic-tech-startup-turq-local-legislation-bills.html).</p>
    </div>
  const aboutJohn = <div>
      <p> John | Marketing Director</p>
      <p> I am a former a U.S. Senator staffer, currently Signals Officer in the Army National Guard, and MBA student at the University of Massachusetts.</p>
    </div>
  const aboutMichael = <div>
      <p>Michael | Co-Founder and CTO</p>
      <p> I am an experienced consultant with a demonstrated history of working in the information technology and services industry. Skilled in Python, Java, C#/.Net, ReactJs and other technology stacks.</p>
    </div>
  return(
    <div style={{ padding: 20 }}>
      <Grid spacing={5} container justify="center">
        <Grid item>
          <AboutPanel 
            title="Tim Wallis"
            text={aboutTim}
            img={Tim}
            alt="Tim Wallis Headshot"
          />
        </Grid>
        <Grid item>
          <AboutPanel 
            title="John Daley"
            text={aboutJohn}
            img={John}
            alt="John Daley Headshot"
            darkBackground
          />
        </Grid>
        <Grid item>
          <AboutPanel 
            title="Michael Conlon"
            text={aboutMichael}
            img={Michael}
            alt="Michael Conlon Headshot"
          />
        </Grid>
      </Grid>
    </div>
)
}

export default Team

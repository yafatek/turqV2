import React from "react"
import Grid from '@material-ui/core/Grid';
import AboutPanel from "./aboutPanel"
import Tim from "../../images/Tim_Wallis.jpeg"
import John from "../../images/John_Daley.jpeg"
import Michael from "../../images/Michael_Conlon.jpeg"

const Team = () => {
  const aboutTim = <div>
      <p>Tim is the co-founder and Chief Executive Officer of Turq.</p>
      <p> In his capacity as chief executive, Tim oversees all aspects of the day-to-day and long-term strategic planning of the company, focusing on aspects such as product and business development, recruitment, administrative operations, software delivery, and organizational development.</p>
      <p> He sets the overall vision of opportunity for the company to improve the existing legislative process through the 21st century medium of civic technology, and by overseeing the software delivery processes he ensures Turq is able to remain hyper-focused on fast iterations based on feedback from customers. rapid learning cycles</p>
      <p> Tim is from Greensboro, North Carolina. A graduate of the University of North Carolina at Charlotte from the Systems Engineering program, he made his first-ever run for public office in 2018 when he launched a campaign for the North Carolina State Senate’s 38th District. Following his run for State Senate, Tim relocated to Somerville, Massachusetts, where he founded Turq in May 2020.</p>
    </div>
  const aboutJohn = <div>
      <p> John is the Chief Revenue Officer of Turq. </p>
      <p> In this capacity, John oversees all aspects of the company’s revenue stream from private equity, venture capital, and other vehicles of investments. He establishes and grows the company’s relationships with other civically-minded companies and individuals in order to create long-term, meaningful relationships that collectively work to improve existing legislative processes. </p>
      <p> Born and raised in Boston, Massachusetts, John is a graduate of the University of North Carolina at Charlotte, where he earned a degree in Political Science. He subsequently spent time working on the staff of a U.S. Senator following graduation, and eventually joined the Army National Guard where he currently serves as a Signal Officer. Additionally, John is currently attending the University of Massachusetts - Boston, where he is a candidate for his Masters in Business Administration degree. </p>
    </div>
  const aboutMichael = <div>
      <p>Michael is the co-founder and Chief Technology Officer of Turq.</p>
      <p>A Computer Scientist by trade, Michael is responsible for evaluating and implementing new technologies and frameworks, as well as the ongoing and continuous development of the platform. He oversees and executes decisions affecting the overall technological infrastructure of Turq’s one-of-a-kind, open-source format for generating legislative contests. In addition to his role as CTO, Michael also supports the day-to-day business operations and decision-making processes, and guides the company towards its strategic endeavors through the utilization of new and existing technologies. </p>
      <p>A native of Appleton, Wisconsin, Michael is a resident of Charlotte, North Carolina. He is an avid athlete who enjoys Ultra-Running, mountain biking, and rock climbing, among other endurance sports.</p>
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

import React from "react"
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const Hero = ({header, subtext, link, buttonText}) => (
<section>
  
  <Grid container alignItems="center" className="hero-bg">
  <div className="hero-blur">
    <Grid container item direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <h2 className="hero-header mt-4">{header}</h2>
        <p className="hero-subtitle mt-4">{subtext}</p>
        <p className="hero-button mt-4">
          <Link to={link}>
            <Button variant="contained" color="primary">{buttonText}</Button>
          </Link>
        </p>

      </Grid>
      <Grid item xs={12} sm={6} className="hero-video mt-4"><iframe width="90%" height="415" src="https://www.youtube.com/embed/nA79ZnhbRMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Grid>
    </Grid>
    </div>
  </Grid>
</section>
)

export default Hero

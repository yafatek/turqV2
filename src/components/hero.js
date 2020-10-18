import React from "react"
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const Hero = ({header, subtext, link, buttonText}) => (
<section>
  <div className="hero-blur"></div>
  <Grid container justify="center" alignItems="center" className="hero-bg">
    <Grid container item direction="column" alignItems="center">
      <Grid item xs={9}>
        <h2 className="hero-header mt-4">{header}</h2>
        <p className="hero-subtitle mt-4">{subtext}</p>
        <p className="mt-4">
          <Link to={link}>
            <Button variant="contained" color="primary">{buttonText}</Button>
          </Link>
        </p>

      </Grid>
    </Grid>
  </Grid>
</section>
)

export default Hero

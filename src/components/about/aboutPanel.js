import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const AboutPanel = ({darkBackground, title, text, img, alt}) => (
  <Grid container direction="column" className={(darkBackground ? "about-dark-row": "about-light-row")} alignItems="center">
    <Grid container item direction={(darkBackground ? "row-reverse" : "row")} xs={10} md={8} justify="space-around">
      <Grid item xs={12} lg={8}>
        <div className="about-text ">
          <h2>{title}</h2>
          {text}
        </div>
      </Grid>
      <Grid container item xs={0} lg={4} alignItems="center" justify="center">
        <Grid item>
          <Hidden mdDown>
            <img src={img} className="round-img" alt={alt} width="300px" height="300px" />
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

AboutPanel.defaultProps = {
  darkBackground: false,
  title: "",
  text: "",
  img: "",
  alt: "",
}

AboutPanel.propTypes = {
  darkBackground: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.object,
  img: PropTypes.string,
  alt: PropTypes.string
}

export default AboutPanel

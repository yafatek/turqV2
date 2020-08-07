import React from "react"
import PropTypes from "prop-types"

const AboutPanel = ({darkBackground, title, text, img, alt}) => (
  <div className={"row py-5 " + (darkBackground ? "about-dark-row": "about-light-row")}>
    <div className="col-10 col-md-8 mx-auto">
      <div className={"row " + (darkBackground ? "flex-row-reverse": "")} >
        <div className={"col-12 col-xl-7 align-self-center about-text " + (darkBackground ? "offset-md-1": "")}>
          <h2>{title}</h2>
          {text}
        </div>
        <div className={"d-none d-xl-block col-12 col-md-4 text-center my-auto about-text " + (darkBackground ? "" : "offset-md-1")}>
          <img src={img} className="round-img" alt={alt} width="300px" height="300px" />
        </div>
      </div>
    </div>
  </div>
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

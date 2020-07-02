import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

const Hero = ({header, subtext, link, buttonText}) => (
<section className="hero-bgImage">
  <div className="hero-blur"></div>
  <div className="container-fluid h-100 d-flex">
    <div className="row justify-content-center align-self-center">
      <div className="col-9 mx-auto">
        <h2 className="hero-header mt-4">{header}</h2>
        <p className="hero-subtitle mt-4">{subtext}</p>
        <p className="mt-4">
          <Link to={link}>
            <Button variant="turq">{buttonText}</Button>
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>
)

export default Hero

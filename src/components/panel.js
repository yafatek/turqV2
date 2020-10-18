import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";

const Panel = ({title, subtitle, buttonText, link, imgSrc, altTxt}) => (
<div className="container-fluid col-md-8 col-11 d-flex h-100">
  <div className="row justify-content-center align-self-center">
    <div className="col">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 col-lg-2">
          <img src={imgSrc} alt={altTxt}/>
        </div>
        <div className="col">
          <h2 className="mt-2">{title}</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          {subtitle} 
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <Link to={link}>
            <Button variant="contained" color="primary">{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Panel

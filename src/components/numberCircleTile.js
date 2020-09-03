import React from "react"

const NumberCircleTile = ({number, title, detail, primary}) => (
  <>
  <div className="row">
    <span className={`numberCircle float-left background-${ primary ? "primary" : "secondary" }`}>{number}</span>
    <h2 className="my-auto ml-4">{title}</h2>
  </div>
  <div className="row mt-3 mr-2">
    <p>{detail}</p>
  </div>
  </>
)

export default NumberCircleTile

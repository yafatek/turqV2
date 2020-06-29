import React from "react"
import Truncate from "react-truncate"

function LegislationListItem ({description, title, id, slug}) {
return(
    <div className="row">
        <div className=" col">
            <a href={slug}><h4>{title}</h4></a>
            <Truncate lines={2}>
                {description}
            </Truncate>
            <hr />
        </div>
    </div>
)
}

export default LegislationListItem
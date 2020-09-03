import React from "react"
import PropTypes from "prop-types"

import LegislationListItem from "./legislationListItem"

function LegislationList ({legislation}) {
const legislationList = legislation
  .map(law => <LegislationListItem
                title={law.title}
                description={law.accomplishes}
                key={law.id}
                id={law.id}
              />)
return(
    <div className="row">
        <div className="col">
            {legislationList.length > 0 ? 
            legislationList 
            : <p> -- Be the first to create new legislation for this contest! -- </p>
            }
        </div>
    </div>
)
}

export default LegislationList

LegislationList.propTypes = {
  legislation: PropTypes.array
}

LegislationList.defaultProps = {
  legislation: []
}
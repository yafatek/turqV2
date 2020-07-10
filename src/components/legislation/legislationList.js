import React from "react"

import LegislationListItem from "./legislationListItem"

function LegislationList ({legislation}) {
const legislationList = legislation
  .map(law => <LegislationListItem
                title={law.node.frontmatter.title}
                description={law.node.frontmatter.accomplishes}
                key={law.node.id}
                slug={law.node.fields.slug}
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

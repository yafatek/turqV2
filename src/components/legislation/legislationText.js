import React from "react"
import ReactMarkdown from "react-markdown";
import { LEGISLATION_SUBTEXT } from "../../constants"
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function LegislationText ({title, chapter, section, accomplishes, terms, purpose, provisions, other, exceptions}) {
  return (
    <Card>
      <CardContent>
        <h1 className="legislation-title">{title}</h1>
        <p className="legislation-subtitle">{ LEGISLATION_SUBTEXT }</p>
        <p className="legislation-SectionTitle">SECTION 1 - { chapter }</p>
        <ReactMarkdown className="legislation-SectionText" source={ section } />
        <p className="legislation-SectionTitle">SECTION 1 - { title }</p>
        <ReactMarkdown className="legislation-SectionText" source={ accomplishes } />
        <p className="legislation-SectionTitle">SECTION 2 - DEFINITIONS</p>
        <ReactMarkdown className="legislation-SectionText" source={ terms } />
        <p className="legislation-SectionTitle">SECTION 3 - STATEMENT OF PURPOSE</p>
        <ReactMarkdown className="legislation-SectionText" source={ purpose } />
        <p className="legislation-SectionTitle">SECTION 4 - PROVISIONS</p>
        <ReactMarkdown className="legislation-SectionText" source={ provisions } />
        { exceptions
            ? <>
            <p className="legislation-SectionTitle">SECTION 5 - SPECIAL EXCEPTIONS</p>
            <ReactMarkdown className="legislation-SectionText" source={ exceptions } />
            </>
            : null
        }
        { other
          ? <>
            <p className="legislation-SectionTitle">SECTION 6 - OTHER PROVISIONS</p>
            <ReactMarkdown className="legislation-SectionText" source={ other } />
          </>
          : null
        }
      </CardContent>
    </Card>
  )
}

export default LegislationText 

LegislationText.propTypes = {
  title: PropTypes.string,
  chapter: PropTypes.string,
  section: PropTypes.string,
  accomplishes: PropTypes.string,
  terms: PropTypes.string,
  purpose: PropTypes.string,
  provisions: PropTypes.string,
  other: PropTypes.string,
  exceptions: PropTypes.string
}

LegislationText.defaultProps = {
  title: "",
  chapter: "",
  section: "",
  accomplishes: "",
  terms: "",
  purpose: "",
  provisions: "",
  other: "",
  exceptions: ""
}
const Section = ({ sect, title, value }) => (
  <div>
    <p>SECTION {sect + "-" + title}</p>
    <p>{value}</p>
  </div>
)

const LegislationPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div>
      <Section sect="1" title={data.chapter} value={data.section} />
      <Section sect="1" title={data.title} value={data.accomplishes} />
      <Section sect="2" title="DEFINITIONS" value={data.terms} />
      <Section sect="3" title="STATEMENT OF PURPOSE" value={data.purpose} />
      <Section sect="4" title="PROVISIONS" value={data.provisions} />
      {data.exceptions ?
        <Section sect="5" title="SPECIAL EXCEPTIONS" value={data.exceptions} />
        : null
      }
      {data.other ?
        <Section sect="6" title="OTHER PROVISIONS" value={data.other} />
        : null
      }
    </div>
  )
}

CMS.registerPreviewTemplate('Draft-Legislation', LegislationPreview)

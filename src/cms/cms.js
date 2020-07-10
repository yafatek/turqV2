import CMS from 'netlify-cms-app'
import LegislationPreview from './legislationPreview.js'
import CompetitionPreview from './competitionPreview.js'
import "../styles/scss/main.scss"

CMS.registerMediaLibrary({
  name: 'disabled',
  init: () => ({ show: () => undefined, enableStandalone: () => false }),
});

CMS.registerPreviewTemplate('Draft-Legislation', LegislationPreview)
CMS.registerPreviewTemplate('Contests', CompetitionPreview)


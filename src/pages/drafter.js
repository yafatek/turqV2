import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout/layout"

const DrafterPage = () => (
  <Layout>
    <Grid container alignItems="center" justify="center">
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textPrimary" component="h2" align="center">
            How To Draft Legislation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" color="textSecondary" component="h4" align="center">
            Help others to bring their legislative dream to reality
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={9}>
        <h3>Drafting Guidelines</h3>
        <ul>
          <li>
            <b>Simplicity</b> - Select short, familiar words and phrases that best express the intended meaning according to common and approved usage. Avoid “legalese.”The language of a statute should be dignified, not pompous.Examples: Use “after”, instead of "subsequent to;" use "before" instead of "prior to."
          </li>
          <li>
           <b>Conciseness</b> - Omit needless language and use the shortest sentence that conveys the intendedmeaning.
          </li>
          <li>
           <b>Consistency</b> - Be consistent in the use of language throughout the bill. Do not use the same word or phrase to convey different meanings. Do not use different language to convey the same meaning.
          </li>
          <li>
           <b>Directness</b> - If a concept can be expressed positively or negatively, express it positively.
          </li>
          <li>
           <b>Ordinary</b> English - Draft in ordinary English. Avoid words that might be considered slang. Also try to avoid using a complicated word when a simple word will convey the same concept.Generally do not use abbreviations and contractions.In rare instances where an abbreviation is used, insert a definition of the abbreviated term.
          </li>
          <li>
           <b>Appropriate</b> Material for Inclusion - It is usually best not to include material that has no legal effect in a bill.
          </li>
          <li>
           <b>Outdated</b> Terminology - Change or remove questionable, imprecise or outmoded words or terminology.Please check the names of state agencies as they occasionally change.
          </li>
          <li>
           <b>Novelty</b> - It isn't already covered by another section of the State Code.
          </li>
          <li>
           <b>Revision</b> - After completing the draft of a bill, revise it carefully and critically. Review each use of a defined term to make sure it is used consistently in its defined sense.
          </li>
          <li>
            <b>Approachable</b> - It can be understood by someone who's not an expert.
          </li>
        </ul>
      </Grid>
    </Grid>
  </Layout>
)

export default DrafterPage

import React from "react"
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import { convertToRaw, convertFromRaw } from "draft-js"
import axios from "axios"
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import CompetitionText from "../components/competition/competitionText"
import Editor, { LeftPanel, RightPanel } from "../components/editor/editor"
import StringInput from "../components/editor/input/stringInput"
import MarkdownInput from "../components/editor/input/markdownInput"
import DateInput from "../components/editor/input/dateInput"
import NumberInput from "../components/editor/input/numberInput"
import InputWrapper from "../components/editor/input/inputWrapper"
import { CONTEST_DATA_URL } from "../constants"
  
class ContestEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, contest: {}};
    this.handleChange = this._handleChange.bind(this);
    this.handleNumberChange = this._handleNumberChange.bind(this);
    this.handleMarkdownChange = this._handleMarkdownChange.bind(this);
    this.handleDateChange = this._handleDateChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    //If we have a parameter we need to get the info for that contest
    if (this.props.match.params.id) {
      axios.get(CONTEST_DATA_URL + "/" + this.props.match.params.id)
        .then(res => {
          const contest = res.data;
          contest.endDate = new Date(contest.endDate);
          this.setState({...this.state, contest, isLoaded: true});
        }
      ).catch(function (error) {
        console.log(error);
      })
    } else {
      // Set to true automatically if we aren't requesting data
      this.setState({...this.state, isLoaded: true})
    }
  }

  _handleDateChange(date, name) {
    this.setState({
      contest: { ...this.state.contest, [name]: date }
    });
  }

  _handleMarkdownChange(editorState, name) {
    var raw = convertToRaw(editorState.getCurrentContent());
    var markdown = draftToMarkdown(raw)
    this.setState({
      contest: { ...this.state.contest, [name]: markdown }
    });
  }

  _handleNumberChange(value, name) {
    this.setState({
      contest: { ...this.state.contest, [name]: value.floatValue }
    });
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      contest: { ...this.state.contest, [name]: value }
    });
  }

  _handleSubmit() {
      const contestId = this.props.match.params.id
      const token = this.props.token
      axios({
        method: (contestId !== undefined ? 'PUT' : 'POST'),
        url: CONTEST_DATA_URL + (contestId !== undefined ? "/" + this.props.match.params.id : ""),
        data: this.state.contest,
        headers: { Authorization: `Bearer ${token}` }
      }).catch(function (error) {
        console.log(error);
      })
  }

  render () {
    const contest = this.state.contest
    var initialDescription = convertFromRaw(markdownToDraft(contest.description))
    var initialRules = convertFromRaw(markdownToDraft(contest.rules))
    var initialCriteria = convertFromRaw(markdownToDraft(contest.criteria))

    return (
      <Layout fullWidth>
        {this.state.isLoaded ?
          <div className="row">
            <div className="col">
            <Button
              variant="turq"
              size="lg"
              onClick={this.handleSubmit}
            >
            Contribute to this Legislation
            </Button>
              <Editor>
                <LeftPanel>
                  <div className="my-3 mx-5">
                    <InputWrapper title="Title" hint="test" >
                      <StringInput
                        className="editor-input col-12 form-control"
                        placeholder="Title"
                        onChange={event => this.handleChange(event)}
                        name="title"
                        value={contest.title}
                      />
                    </InputWrapper>
                    <InputWrapper title="End Date" hint="Competition end date" >
                      <DateInput
                        date={contest.endDate}
                        onChange={(date) => this.handleDateChange(date, "endDate")}
                        value={contest.endDate}
                      />
                    </InputWrapper>
                    <InputWrapper title="Prize" hint="Cash prize in $USD" >
                      <NumberInput
                        className="form-control editor-number col-12"
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        placeholder="prize"
                        onValueChange={(val) => this.handleNumberChange(val, "prize")}
                        value={contest.prize}
                      />
                    </InputWrapper>
                    <InputWrapper title="Description" hint="Contest description" >
                      <MarkdownInput
                        placeholder="Description"
                        onChange={this.handleMarkdownChange}
                        initialState={initialDescription}
                        name="description"
                      />
                    </InputWrapper>
                    <InputWrapper title="Rules (Optional)" hint="Contest description" >
                      <MarkdownInput
                        placeholder="Rules"
                        onChange={this.handleMarkdownChange}
                        initialState={initialRules}
                        name="rules"
                      />
                    </InputWrapper>
                    <InputWrapper title="Judging Criteria" hint="Contest description" >
                      <MarkdownInput
                        placeholder="Juding Criteria"
                        onChange={this.handleMarkdownChange}
                        initialState={initialCriteria}
                        name="criteria"
                      />
                    </InputWrapper>
                  </div>
                </LeftPanel>
                <RightPanel>
                  <div className="mx-5 my-5">
                    <CompetitionText 
                      title={contest.title}
                      prizes={contest.prize}
                      endDate={(contest.endDate) ? contest.endDate.toISOString().split('T')[0]: null}
                      description={contest.description}
                      rules={contest.rules}
                      criteria={contest.criteria}
                    />
                  </div>
                </RightPanel>
              </Editor>
            </div>
          </div>
          : <div />
        }
      </Layout>
    )
  }
}


function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated, token } = auth

  return {
    isAuthenticated,
    token
  }
}

export default connect(mapStateToProps)(ContestEditor)


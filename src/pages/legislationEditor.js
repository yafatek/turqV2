import React from "react"
import axios from "axios"
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

import EditorLayout from "../components/editor/layout"
import LegislationText from "../components/legislation/legislationText"
import Editor, { LeftPanel, RightPanel } from "../components/editor/editor"
import StringInput from "../components/editor/input/stringInput"
import TextInput from "../components/editor/input/textInput"
import InputWrapper from "../components/editor/input/inputWrapper"
import { LEGISLATION_DATA_URL } from "../constants"
import { updateLegislation } from '../actions/legislationActions'
  
class LegislationEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, legislation: {}};
    this.handleChange = this._handleChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const prev_data = localStorage.getItem('unsaved_legislation')

    //If we have a parameter we need to get the info for that contest
    var contest = new URLSearchParams(this.props.location.search).get('contest')
    if (this.props.match.params.id) {
      axios.get(LEGISLATION_DATA_URL + "/" + this.props.match.params.id)
        .then(res => {
          const legislation = res.data;
          this.setState({...this.state, legislation, isLoaded: true});
          console.log(this.state)
        }).catch(function (error) {
          toast.error("Unable to load contest, plese try again in a few minutes");
        })
    } else if (prev_data !== null) {
      var legislation = JSON.parse(prev_data);
      this.setState({...this.state, isLoaded: true, legislation: {...legislation}, contest: contest})
    } else if (contest) {
      contest = parseInt(contest)
      // Set to true automatically if we aren't requesting data
      this.setState({...this.state, isLoaded: true, contest: contest})
    }
  }

  componentDidUpdate() {
    localStorage.setItem('unsaved_legislation', JSON.stringify(this.state.legislation))
  }

  _handleSubmit() {
      const legislationId = this.props.match.params.id
      const token = this.props.token
      const data = {...this.state.legislation, contestId: this.state.contest}
      this.props.dispatch(updateLegislation(legislationId, data, token))
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      legislation: { ...this.state.legislation, [name]: value }
    });
  }

  render () {
    const legislation = this.state.legislation

    return (
      <EditorLayout onSubmit={this.handleSubmit}>
      {this.state.isLoaded ?
        <div className="row">
          <div className="col">
            <Editor>
              <LeftPanel>
                <div className="my-3 mx-5">
                  <InputWrapper title="Title" hint="test" >
                    <StringInput
                      placeholder="Title"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.title}
                      name="title"
                    />
                  </InputWrapper>
                  <InputWrapper title="Chapter" hint="test" >
                    <StringInput
                      placeholder="Chapter"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.chapter}
                      name="chapter"
                    />
                  </InputWrapper>
                  <InputWrapper title="General Laws Section" hint="test" >
                    <StringInput
                      placeholder="General Laws Section"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.section}
                      name="section"
                    />
                  </InputWrapper>
                  <InputWrapper title="Describe what this bill accomplishes in 1-2 sentences" hint="test" >
                    <StringInput
                      placeholder="General Laws Section"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.accomplishes}
                      name="accomplishes"
                    />
                  </InputWrapper>
                  <InputWrapper title="Define the terms you will be using in this legislation" hint="test" >
                    <TextInput
                      placeholder="Terms"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.terms}
                      name="terms"
                    />
                  </InputWrapper>
                  <InputWrapper title="Statement of Purpose (expand and go deeper on Bill description)" hint="test" >
                    <TextInput
                      placeholder="Purpose"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.purpose}
                      name="purpose"
                    />
                  </InputWrapper>
                  <InputWrapper title="Provisions" hint="test" >
                    <TextInput
                      placeholder="Provisions"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.provisions}
                      name="provisions"
                    />
                  </InputWrapper>
                  <InputWrapper title="Special Exceptions (optional)" hint="test" >
                    <TextInput
                      placeholder="Exceptions"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.exceptions}
                      name="exceptions"
                    />
                  </InputWrapper>
                  <InputWrapper title="Other Provisions (optional)" hint="test" >
                    <TextInput
                      placeholder="Other Provisions"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.other}
                      name="other"
                    />
                  </InputWrapper>
                </div>
              </LeftPanel>
              <RightPanel>
                <div className="mx-5 my-5">
              <LegislationText
                title={legislation.title}
                chapter={legislation.chapter}
                section={legislation.section}
                accomplishes={legislation.accomplishes}
                terms={legislation.terms}
                purpose={legislation.purpose}
                provisions={legislation.provisions}
                competition={legislation.competition}
                other={legislation.other}
                exceptions={legislation.exceptions}
              />
                </div>
              </RightPanel>
            </Editor>
          </div>
        </div>
        : <div />
      }
      </EditorLayout>
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

export default connect(mapStateToProps)(LegislationEditor)

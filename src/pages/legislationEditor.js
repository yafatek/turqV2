import React from "react"
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import isEmpty from 'underscore/modules/isEmpty'
import { toast } from 'react-toastify';

import EditorLayout from "../components/editor/layout"
import LegislationText from "../components/legislation/legislationText"
import Editor, { LeftPanel, RightPanel } from "../components/editor/editor"
import StringInput from "../components/editor/input/stringInput"
import TextInput from "../components/editor/input/textInput"
import InputWrapper from "../components/editor/input/inputWrapper"
import Modal from "../components/modal"
import { updateLegislation, fetchLegislation } from '../actions/legislationActions'
import * as constants from '../constants'
  
class LegislationEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {legislation: {}};
    this.handleChange = this._handleChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.populateSavedData = this._populateSavedData.bind(this);
  }
  
  componentDidMount() {
    const prev_data = localStorage.getItem('unsaved_legislation')

    //If we have a parameter we need to get the info for that contest
    var contest = new URLSearchParams(this.props.location.search).get('contest')
    if (this.props.match.params.id) {
      this.props.dispatch(fetchLegislation(this.props.match.params.id))
    } else if (prev_data !== null) {
      var legislation = JSON.parse(prev_data);
      var showModal = isEmpty(legislation) ? false : true
      this.setState({...this.state, isLoaded: true, showModal: showModal, savedData: {...legislation}, contest: contest})
    } else if (contest) {
      contest = parseInt(contest)
      // Set to true automatically if we aren't requesting data
      this.setState({...this.state, isLoaded: true, contest: contest})
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, legislation: {...nextProps.legislation}})
  }

  componentDidUpdate() {
    localStorage.setItem('unsaved_legislation', JSON.stringify(this.state.legislation))
  }

  _checkMandatoryFields() {
    var isValid = true
    const legislation = this.state.legislation
    if (legislation === undefined) {
      toast.error('Document Empty: Please fill in required Fields');
      isValid = false
    } else if (legislation.title === undefined || legislation.title === "") {
      toast.error('Missing Required Fields: Please include "Title"');
      isValid = false
    } else if (legislation.chapter === undefined || legislation.chapter === "") {
      toast.error('Missing Required Fields: Please include "Chapter"');
      isValid = false
    } else if (legislation.section === undefined || legislation.section === "") {
      toast.error('Missing Required Fields: Please include "General Laws Section"');
      isValid = false
    } else if (legislation.accomplishes === undefined || legislation.accomplishes === "") {
      toast.error('Missing Required Fields: Please include "Describe what this bill accomplishes in 1-2 sentences"');
      isValid = false
    } else if (legislation.terms === undefined || legislation.terms === "") {
      toast.error('Missing Required Fields: Please include "Define the terms you will be using in this legislation"');
      isValid = false
    } else if (legislation.purpose === undefined || legislation.purpose === "") {
      toast.error('Missing Required Fields: Please include "Statement of Purpose"');
      isValid = false
    } else if (legislation.provisions === undefined || legislation.provisions === "") {
      toast.error('Missing Required Fields: Please include "Provisions"');
      isValid = false
    }
    return isValid
  }

  _handleSubmit() {
      if (!this._checkMandatoryFields()) {

        return
      }
      const legislationId = this.props.match.params.id
      const token = this.props.token
      const data = {...this.state.legislation, contestId: this.state.contest}
      this.props.dispatch(updateLegislation(legislationId, data, token))
  }

  _populateSavedData(populateData) {
    if (populateData) {
      this.setState({...this.state, showModal: false, legislation: this.state.savedData, savedData: null, })
    } else {
      this.setState({...this.state, showModal: false, savedData: null })
    }
    localStorage.removeItem('unsaved_legislation')
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

    var modal = null
    if (this.state.savedData && this.state.showModal) {
      modal = 
        <Modal
          show={this.state.showModal}
          header="Previous Data Found!"
          body="You have unsaved work, would you like to load it now?">
            <Button color="primary" onClick={() => this.populateSavedData(true)}>Accept</Button>
            <Button color="default" onClick={() => this.populateSavedData(false)}>Decline</Button>
        </Modal>
    }

    return (
      <EditorLayout onSubmit={this.handleSubmit}>
      {!this.props.isFetching ?
        <div className="row">
          <div className="col">
            {modal}
            <Editor>
              <LeftPanel>
                <div className="my-3 mx-5">
                  <InputWrapper title="Title" hint={constants.LEGISLATION_TITLE_HINT} >
                    <StringInput
                      placeholder="Title"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.title}
                      name="title"
                    />
                  </InputWrapper>
                  <InputWrapper title="Chapter" hint={constants.LEGISLATION_CHAPTER_HINT} >
                    <StringInput
                      placeholder="Chapter"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.chapter}
                      name="chapter"
                    />
                  </InputWrapper>
                  <InputWrapper title="General Laws Section" hint={constants.LEGISLATION_ACCOMPLISHES_HINT} >
                    <StringInput
                      placeholder="General Laws Section"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.section}
                      name="section"
                    />
                  </InputWrapper>
                  <InputWrapper title="Describe what this bill accomplishes in 1-2 sentences" hint={constants.LEGISLATION_ACCOMPLISHES_HINT} >
                    <StringInput
                      placeholder="General Laws Section"
                      className="editor-input col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.accomplishes}
                      name="accomplishes"
                    />
                  </InputWrapper>
                  <InputWrapper title="Define the terms you will be using in this legislation" hint={constants.LEGISLATION_TERMS_HINT} >
                    <TextInput
                      placeholder="Terms"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.terms}
                      name="terms"
                    />
                  </InputWrapper>
                  <InputWrapper title="Statement of Purpose (expand and go deeper on Bill description)" hint={constants.LEGISLATION_PURPOSE_HINT} >
                    <TextInput
                      placeholder="Purpose"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.purpose}
                      name="purpose"
                    />
                  </InputWrapper>
                  <InputWrapper title="Provisions" hint={constants.LEGISLATION_PROVISIONS_HINT} >
                    <TextInput
                      placeholder="Provisions"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.provisions}
                      name="provisions"
                    />
                  </InputWrapper>
                  <InputWrapper title="Special Exceptions (optional)" hint={constants.LEGISLATION_EXCEPTIONS_HINT} >
                    <TextInput
                      placeholder="Exceptions"
                      className="editor-textarea col-12 form-control"
                      onChange={event => this.handleChange(event)}
                      value={legislation.exceptions}
                      name="exceptions"
                    />
                  </InputWrapper>
                  <InputWrapper title="Other Provisions (optional)" hint={constants.LEGISLATION_OTHER_HINT} >
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

  var { legislation, auth } = state
  const isFetching = legislation.isFetching
  legislation = legislation.legislation
  const { isAuthenticated } = auth

  return {
    isFetching,
    legislation,
    isAuthenticated
  }
}
export default connect(mapStateToProps)(LegislationEditor)

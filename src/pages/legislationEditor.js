import React from "react"
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/database'
import Firepad from 'firepad';

import EditorLayout from "../components/editor/layout"
import LegislationText from "../components/legislation/legislationText"
import Editor, { LeftPanel, RightPanel } from "../components/editor/editor"
import { updateLegislation} from '../actions/legislationActions'
  
class LegislationEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ref: '', title: '', content: ''};
    this.handleSubmit = this._handleSubmit.bind(this);
    this.onSynced = this._onSynced.bind(this);
    this.onReady = this._onReady.bind(this);
    this.email = localStorage.getItem('email')
    this.firepad = null;
  }
  
  componentDidMount() {

    var config= {
    apiKey: "AIzaSyCEQ7cLJuyrbRLq_A-sjXUwxseMaKVosEE",
    authDomain: "turq-legislation-editor-1.firebaseapp.com",
    databaseURL: "https://turq-legislation-editor-1-default-rtdb.firebaseio.com",
    projectId: "turq-legislation-editor-1",
    storageBucket: "turq-legislation-editor-1.appspot.com",
    messagingSenderId: "670875815290",
    appId: "1:670875815290:web:a5da8f93c91052ed44dac3",
    measurementId: "G-Y6NX5XHT68"
  }

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var firepadRef = this._createRef();
    var codeMirror = window.CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });
    this.firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
            richTextShortcuts: true,
            richTextToolbar: true,
          });
    this.firepad.on('ready', this.onReady)
    this.firepad.on('synced', this.onSynced)

  }

  // Add the text to state when the page initally loads
  _onReady() {
    var text = this.firepad.getText();
    this.setState({...this.state, content: text})
    if (this.firepad.getHtml() === '') {
      this.firepad.setHtml('<div><b>Legislation Title</b></div><div><b></b><br/></div><div><b>Section 1</b></div><div><b></b><br/></div><div><b>Section 2&nbsp;</b></div><div><b></b><br/></div><div><b>Etc.</b></div>')
    }
    this.setState({...this.state, content: text})
  }

  // Update the text stored in state everytime the user changes and text and the db syncs
  _onSynced(isSynced) {
    if(isSynced)
    {
      var text = this.firepad.getText();
      this.setState({...this.state, content: text})
    }
  }

  //Create the reference to the firepad document -- /posts/<email>/<contestId>
  _createRef() {
    var ref = firebase.database().ref();
    var URLRef = new URLSearchParams(this.props.location.search).get('ref')
    if (URLRef) {
      ref = ref.child(URLRef);
    } else {
      ref = ref.push(); // generate unique location.
      var oldURL = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "New Page Title", oldURL + "?ref=" + ref.key)
    }
    this.setState({...this.state, ref: ref.key})
    return ref;
  }

  _checkMandatoryFields() {
    var isValid = true
    return isValid
  }

  _handleSubmit() {
    if (!this._checkMandatoryFields()) {
      return
    }
    var contest = new URLSearchParams(this.props.location.search).get('contest')
    const legislationId = this.props.match.params.id
    const data = {title: "testTitle" , ref: this.state.ref, contestId: contest, content: this.state.content}
    this.props.dispatch(updateLegislation(legislationId, data))
  }

  render () {

    return (
      <EditorLayout onSubmit={this.handleSubmit}>
      {!this.props.isFetching ?
        <div className="row">
          <div className="col">
            <Editor>
              <LeftPanel>
                <div className="my-3 mx-5">
                <div id="firepad-container"></div>
                </div>
              </LeftPanel>
              <RightPanel>
                <LegislationText
                  title={this.state.title}
                  content={this.state.content}
              />
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
  const { isAuthenticated, email } = auth

  return {
    isFetching,
    legislation,
    isAuthenticated,
    email,
    auth
  }
}
export default connect(mapStateToProps)(LegislationEditor)

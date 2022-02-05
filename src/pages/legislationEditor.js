import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import Firepad from 'firepad';
import DiffMatchPatch from 'diff-match-patch';
import { Button } from "@material-ui/core"

import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import EditorLayout from '../components/editor/layout';
import LegislationText from '../components/legislation/legislationText';
import Editor, { LeftPanel, RightPanel } from '../components/editor/editor';
import { updateLegislation } from '../actions/legislationActions';

class LegislationEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { ref: '', title: '', content: '' };
    this.handleSubmit = this._handleSubmit.bind(this);
    this.editLegislation = this._editLegislation.bind(this);
    this.formatLegislation = this._formatLegislation.bind(this);
    this.onSynced = this._onSynced.bind(this);
    this.onReady = this._onReady.bind(this);
    this.email = localStorage.getItem('email');
    this.firepad = null;
    this.originalText = '';
    this.diffedContent = null;
    this.formattedContent = null;
  }
  

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCEQ7cLJuyrbRLq_A-sjXUwxseMaKVosEE',
      authDomain: 'turq-legislation-editor-1.firebaseapp.com',
      databaseURL: 'https://turq-legislation-editor-1-default-rtdb.firebaseio.com',
      projectId: 'turq-legislation-editor-1',
      storageBucket: 'turq-legislation-editor-1.appspot.com',
      messagingSenderId: '670875815290',
      appId: '1:670875815290:web:a5da8f93c91052ed44dac3',
      measurementId: 'G-Y6NX5XHT68',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    const firepadRef = this._createRef();
    const codeMirror = window.CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });
    this.firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      richTextShortcuts: true,
      richTextToolbar: true,
    });
    this.firepad.on('ready', this.onReady);
    this.firepad.on('synced', this.onSynced);
  }

  // Add the text to state when the page initally loads
  _onReady() {
    const text = this.firepad.getText();
    this.setState({ ...this.state, content: text, originalText: text });
    if (this.firepad.getHtml() === '') {
      this.firepad.setHtml('<div><b>Legislation Title</b></div><div><b></b><br/></div><div><b>Section 1</b></div><div><b></b><br/></div><div><b>Section 2&nbsp;</b></div><div><b></b><br/></div><div><b>Etc.</b></div>');
    }
    this.setState({ ...this.state, content: text });
  }

  // Update the text stored in state everytime the user changes and text and the db syncs
  _onSynced(isSynced) {
    if (isSynced) {
      const text = this.firepad.getText();
      this.setState({ ...this.state, content: text });
      this._onDiff();
    }
  }

  _onDiff() {
    const dmp = new DiffMatchPatch();

    const text1 = this.state.originalText;
    const text2 = this.state.content;
    

    this.setState({ originalText: text1, diffedContent: text2 });
  }

  // Create the reference to the firepad document -- /posts/<email>/<contestId>
  _createRef() {
    let ref = firebase.database().ref();
    const URLRef = new URLSearchParams(this.props.location.search).get('ref');
    if (URLRef) {
      ref = ref.child(URLRef);
    } else {
      ref = ref.push(); // generate unique location.
      const oldURL = window.location.origin + window.location.pathname;
      window.history.replaceState(null, 'New Page Title', `${oldURL}?ref=${ref.key}`);
    }
    this.setState({ ...this.state, ref: ref.key });
    return ref;
  }

  _checkMandatoryFields() {
    const isValid = true;
    return isValid;
  }

  _editLegislation() {
    const content = this.firepad.getText();
    this.setState({originalText: content});
  }

  _formatLegislation() {
    const content = this.firepad.getText();
    this.setState({formattedContent: content});
  }

  _handleSubmit() {
    if (!this._checkMandatoryFields()) {
      return;
    }
    const contest = new URLSearchParams(this.props.location.search).get('contest');
    const legislationId = this.props.match.params.id;
    const data = {
      title: 'Submitted Bill', ref: this.state.ref, contestId: contest, content: this.state.content,
    };
    this.props.dispatch(updateLegislation(legislationId, data));
  }

  render() {
    return (
      <EditorLayout editLegislation={this.editLegislation} onSubmit={this.handleSubmit}>
        {!this.props.isFetching
          ? (
            <div>
              <div className="row">
                <div className="col">
                  <Editor>
                    <LeftPanel>
                      <div className="my-3 mx-5">
                        <div id="firepad-container" />
                      </div>
                    </LeftPanel>
                    <RightPanel>
                      <ReactDiffViewer oldValue={this.state.originalText} newValue={this.state.diffedContent} splitView={false} />
                    </RightPanel>
                  </Editor>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    className="mb-2"
                    variant="contained"
                    color="secondary"
                    onClick={this.formatLegislation}
                  >Format Legislation</Button>
                  <LegislationText content={this.state.formattedContent}></LegislationText>
                  
                </div>
              </div>
            </div>
          )
          : <div />}
      </EditorLayout>
    );
  }
}

function mapStateToProps(state) {
  let { legislation, auth } = state;
  const { isFetching } = legislation;
  legislation = legislation.legislation;
  const { isAuthenticated, email } = auth;

  return {
    isFetching,
    legislation,
    isAuthenticated,
    email,
    auth,
  };
}
export default connect(mapStateToProps)(LegislationEditor);

import { connect } from 'react-redux';
import React, { Component, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'firebase/database';
import EditorLayout from '../components/editor/layout';


function LegislationEditor (props) {
  const email = localStorage.getItem('email');
  console.log(props.allState);
  const config = {
    docId    : "docId",
    user     : {
        name : email,
    },
    apiKey   : "7bdf58a1-e722-4868-bee9-b7e7c65a09b6",
  };
  const editorRef = useRef(null);
  const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
    return (
      <EditorLayout> 
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         apiKey="8ibbzj1vs93puli4xfo36621uu8sgesoz4kdulasuabafccp"
         init={{
           height: 500,
           menubar: false,
           plugins: 'export',
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ',
           external_plugins : {
            wave : "https://cdn2.codox.io/waveTinymce/2.x/plugin.min.js"
          },
          wave   : config
         }}
       />
       
      </EditorLayout>
    );
  
}

function mapStateToProps(state) {
  const allState = state;
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
    allState,
  };
}
export default connect(mapStateToProps)(LegislationEditor);

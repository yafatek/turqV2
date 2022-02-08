import React from "react"
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import { Button } from "@material-ui/core"
import Logo from "../logo"

const EditorHeader = props => {
  const {editLegislation, onSubmit} = props;
  let history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav float-right">
        <Nav className="mr-auto ml-1">
          <Nav.Link onClick={() => history.goBack()}> &laquo; Back</Nav.Link>
        </Nav>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto mr-1">
          <Button
            className="mr-1"
            variant="contained"
            color="secondary"
            onClick={editLegislation}
          >Start Editing</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
          > 
            Save
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default EditorHeader

import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from "../components/logo"

const Header = () => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand>
    <Link to="/">
      <Logo />
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav float-right">
    <Nav className="mr-auto">
      <Link className="nav-link" activeClassName="header-active" to="/sponsor"> Create Contest </Link>
      <Link className="nav-link" activeClassName="header-active" to="/contest"> Explore Contests </Link>
    </Nav>
    <Nav className="ml-auto mr-3">
      <Link className="nav-link" activeClassName="header-active" to="/drafter">Drafting Guidelines</Link>
      <Link className="nav-link" activeClassName="header-active" to="/about">About</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header

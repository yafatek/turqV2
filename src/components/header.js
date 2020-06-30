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
      <Link className="nav-link" to="/sponsor"> Sponsors </Link>
      <NavDropdown title="Drafters" id="basic-nav-dropdown">
        <Link className="dropdown-item" to="/contest">View Contests</Link>
        <Link className="dropdown-item" to="/howToContribute">How To Contribute</Link>
      </NavDropdown>
      <Link className="nav-link" to="/about"> About </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header

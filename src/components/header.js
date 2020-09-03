import React from "react"
import { Link, NavLink } from "react-router-dom";
import propTypes from "prop-types"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../components/logo"

const Header = ({isAuthenticated, logout}) => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand>
    <Link to="/">
      <Logo />
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav float-right">
    <Nav className="mr-auto">
      <NavLink className="nav-link" activeClassName="header-active" to="/sponsor"> Create Contest </NavLink>
      <NavLink className="nav-link" activeClassName="header-active" to="/contest"> Explore Contests </NavLink>
    </Nav>
    <Nav className="ml-auto mr-3">
      <NavLink className="nav-link" activeClassName="header-active" to="/drafter">Drafting Guidelines</NavLink>
      <NavLink className="nav-link" activeClassName="header-active" to="/about">About</NavLink>
      {isAuthenticated
      ?<NavLink href="#" className="nav-link" activeClassName="header-active" to="/login"onClick={() => logout()}>Logout</NavLink>
      :<NavLink className="nav-link" activeClassName="header-active" to="/login">Login</NavLink>
      }
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header

Header.propTypes = {
  isAuthenticated: propTypes.bool,
}

Header.defaultProps = {
  isAuthenticated: false
}

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import propTypes from "prop-types";
import Logo from "../logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { styled, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import {
  DRAFTER_PAGE_URL,
  CONTEST_PAGE_URL,
  SUPPORT_PAGE_URL,
  DRAFT_GUIDE_PAGE_URL,
  ABOUT_PAGE_URL,
  LOGIN_PAGE_URL,
  POST_CONTEST_PAGE_URL,
} from "../../constants";

const AppHeader = styled(AppBar)({
  backgroundColor: "#f8f9fa",
  color: "#444444",
});

const DesktopHeader = ({ isAuthenticated, logout }) => {
  const history = useHistory();
  const [y, setY] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setY(window.pageYOffset);
    };
  }, [setY]);
  return (
    <div>
      <AppHeader position="fixed">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid container item xs={6} alignItems="center">
              <Grid item>
                <Link to="/">
                  <Logo />
                </Link>
              </Grid>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <Grid item>
                <Typography align="center">
                  <a
                    href={DRAFTER_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>How To</Button>
                  </a>
                  <a
                    href={DRAFT_GUIDE_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Guides</Button>
                  </a>
                  <Link to={CONTEST_PAGE_URL}>
                    <Button>Discover</Button>
                  </Link>
                  <Link to={SUPPORT_PAGE_URL}>
                    <Button>Support</Button>
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link to={ABOUT_PAGE_URL}>
                    <Button>About</Button>
                  </Link>
                  {isAuthenticated ? (
                    <Link to={LOGIN_PAGE_URL}>
                      <Button onClick={() => logout()}>Logout</Button>
                    </Link>
                  ) : (
                    <Link
                      to={{
                        pathname: LOGIN_PAGE_URL,
                        state: { prevPath: history.location.pathname },
                      }}
                    >
                      <Button>Login</Button>
                    </Link>
                  )}
                  {y > 300 ? (
                    <Link to={POST_CONTEST_PAGE_URL}>
                      <Button>Raise an Issue</Button>
                    </Link>
                  ) : null}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppHeader>
      {/* Without this extra toolbar the content will render underneath the real toolbar
          Reference: https://material-ui.com/components/app-bar/#fixed-placement */}
      <Toolbar />
    </div>
  );
};

const MobileHeader = ({ isAuthenticated, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      menuTitle: "Support",
      pageURL: SUPPORT_PAGE_URL,
      onClick: null,
    },
    {
      menuTitle: "Explore Issues",
      pageURL: CONTEST_PAGE_URL,
      onClick: null,
    },
    {
      menuTitle: "Drafting Guidelines",
      pageURL: DRAFTER_PAGE_URL,
      onClick: null,
    },
    {
      menuTitle: "About",
      pageURL: ABOUT_PAGE_URL,
      onClick: null,
    },
    {
      menuTitle: isAuthenticated ? "Logout" : "Login",
      pageURL: LOGIN_PAGE_URL,
      onClick: logout,
    },
  ];

  return (
    <div style={{ flexGrow: 1 }}>
      <AppHeader position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/">
                <Logo />
              </Link>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                ariaLabel="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL, onClick } = menuItem;
                  return (
                    <Link to={pageURL} key={menuItem.menuTitle}>
                      <MenuItem
                        onClick={() => {
                          onClick && onClick();
                        }}
                      >
                        <Typography align="center" color="textPrimary">
                          {menuTitle}
                        </Typography>
                      </MenuItem>
                    </Link>
                  );
                })}
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppHeader>
    </div>
  );
};

const Header = ({ isAuthenticated, logout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <MobileHeader isAuthenticated={isAuthenticated} logout={logout} />
      ) : (
        <DesktopHeader isAuthenticated={isAuthenticated} logout={logout} />
      )}
    </>
  );
};

export default Header;

Header.propTypes = {
  isAuthenticated: propTypes.bool,
};

Header.defaultProps = {
  isAuthenticated: false,
};

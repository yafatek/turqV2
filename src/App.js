import React from 'react';
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loadProgressBar } from 'axios-progress-bar'
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./components/privateRoute"
import Home from './pages/home';
import About from './pages/about';
import Drafter from './pages/drafter';
import Sponsor from './pages/sponsor';
import ContestList from './pages/contestList';
import Contest from './pages/contest';
import Legislation from './pages/legislation';
import ContestEditor from './pages/contestEditor';
import LegislationEditor from './pages/legislationEditor';
import Login from './pages/login';
import Register from './pages/register';
import * as constants from './constants'

// Loading bar for pages with axios requests
let api = axios.create({
  timeout: 10000,
})
loadProgressBar('',api)

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Helmet>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <ToastContainer
        closeOnClick
        position="top-center"
        autoClose={4000}
        draggable
        newestOnTop={false}
      />
    </div>

    <Switch>
      <Route path={constants.HOME_PAGE_URL} exact component={Home} />
      <Route path={constants.ABOUT_PAGE_URL} component={About} />
      <Route path={constants.DRAFTER_PAGE_URL} component={Drafter} />
      <Route path={constants.SPONSOR_PAGE_URL} component={Sponsor} />
      <Route path={constants.LOGIN_PAGE_URL} component={Login} />
      <Route path={constants.REGISTER_PAGE_URL} component={Register} />
      <Route path={constants.CONTEST_PAGE_URL} exact component={ContestList} />
      <Route path={constants.CONTEST_PAGE_URL + "/:id"} component={Contest}/>
      <Route path={constants.LEGISLATION_PAGE_URL + "/:id"} component={Legislation}/>
      <PrivateRoute path={constants.EDITOR_PAGE_URL + "/contest"}  exact component={ContestEditor}/>
      <PrivateRoute path={constants.EDITOR_PAGE_URL + "/contest/:id"}  exact component={ContestEditor}/>
      <PrivateRoute path={constants.EDITOR_PAGE_URL + "/legislation"} exact component={LegislationEditor}/>
      <PrivateRoute path={constants.EDITOR_PAGE_URL + "/legislation/:id"} exact component={LegislationEditor}/>
    </Switch>

  </BrowserRouter>
  );
}

export default App;

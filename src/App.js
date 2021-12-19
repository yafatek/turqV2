import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PrivateRoute from "./components/routing/privateRoute";
import ScrollToTop from "./components/routing/scrollToTop";
import Home from "./pages/home";
import About from "./pages/about";
import Drafter from "./pages/drafter";
import ContestList from "./pages/contestList";
import Contest from "./pages/contest";
import Support from "./pages/support";
import Legislation from "./pages/legislation";
import LegislationEditor from "./pages/legislationEditor";
import Login from "./pages/login";
import Register from "./pages/register";
import Checkout from "./pages/checkout";
import PaymentThankyou from "./pages/paymentThankyou";
import PostContestPage from "./pages/postContest";
import ContestEditor from "./pages/newContestEditor";
import * as constants from "./constants";
import {PROFILE_PAGE_URL} from "./constants";
import ProfilePage from "./pages/users/ProfilePage";

// Loading bar for pages with axios requests
let api = axios.create({
  timeout: 10000,
});
loadProgressBar("", api);

const stripePromise = loadStripe(constants.STRIPE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="Turq.io is a social action platform for on-demand legislation creation. Real Bills, not just more petitions."
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <title>Turq</title>
          </Helmet>
          <ToastContainer
            closeOnClick
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            draggable
            newestOnTop={false}
          />
        </div>

        <Switch>
          <Route path={constants.HOME_PAGE_URL} exact component={Home} />
          <Route path={constants.ABOUT_PAGE_URL} component={About} />
          <Route path={constants.SUPPORT_PAGE_URL} component={Support} />
          <Route path={constants.DRAFTER_PAGE_URL} component={Drafter} />
          <Route path={constants.LOGIN_PAGE_URL} component={Login} />
          <Route path={constants.REGISTER_PAGE_URL} component={Register} />
          <Route path={constants.PROFILE_PAGE_URL} exact component={ProfilePage} />
          <Route
            path={constants.CONTEST_PAGE_URL}
            exact
            component={ContestList}
          />
          <Route
            path={constants.CONTEST_PAGE_URL + "/:id"}
            component={Contest}
          />
          <Route
            path="/legislation/:id"
            // path={constants.LEGISLATION_PAGE_URL + "/legislation/:id"}
            component={Legislation}
          />
          <Route path={constants.THANKYOU_URL} component={PaymentThankyou} />
          <PrivateRoute
            path={constants.CHECKOUT_PAGE_URL}
            component={Checkout}
          />
          <PrivateRoute
            path="/editor/contest"
            // path={constants.EDITOR_PAGE_URL + "/editor/contest"}
            exact
            component={ContestEditor}
          />
          <PrivateRoute
            path="/editor/contest/:id"
            // path={constants.EDITOR_PAGE_URL + "/editor/contest/:id"}
            exact
            component={ContestEditor}
          />
          <PrivateRoute
            path="/editor/legislation"
            // path={constants.EDITOR_PAGE_URL + "/editor/legislation"}
            exact
            component={LegislationEditor}
          />
          <PrivateRoute
            path="/editor/legislation/:id"
            // path={constants.EDITOR_PAGE_URL + "/editor/legislation/:id"}
            exact
            component={LegislationEditor}
          />
          <PrivateRoute
            path={constants.POST_CONTEST_PAGE_URL}
            exact
            component={PostContestPage}
          />
        </Switch>
      </BrowserRouter>
    </Elements>
  );
}

export default App;

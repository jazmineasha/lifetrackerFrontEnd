import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "./vendor/bootstrap-without-jquery";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import {Provider} from "react-redux";
import store from "./stores/oneStore"
import Login from "./pages/Login";
//import LoginRequired from './utils/LoginRequired';

var DefaultRoute = Router.DefaultRoute;

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

  const app = document.getElementById('app');
  /*ReactDOM.render(
    <Provider store={store}><Router history={hashHistory}>
      <Route path="/" component ={Layout}>
      <IndexRoute component = {Featured}/>
      <Route path="archives" component={Archives}/>
      <Route path ="settings" component ={Settings}/>
      <Route path ="featured" component ={Featured}/>
      </Route>
    </Router></Provider>,
    app);*/

    /*
    <Route handler={LoginRequired}>
    <Route handler={Layout}>
      <DefaultRoute handler={Featured} name="Featured"/>
    </Route>
    </Route>*/



   ReactDOM.render(
      <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={Login} name="Login" path="Login"/>
      </Router>
      </Provider>,
      app
    );

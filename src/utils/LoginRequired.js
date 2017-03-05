// util/RouteHelpers.js

import React from 'react';
import Router from 'react-router';
import store from './../stores/oneStore'

export default class LoginRequired extends React.Component {
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      if(!AuthStore.loggedIn()){
        // go over to login page
        transition.redirect('/login', null, { redirect: transition.path });
      }
      callback();
    }
  },
  render () {
    return (
      <Router.RouteHandler/>
    );
  }

}

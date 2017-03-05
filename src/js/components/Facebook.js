import React from 'react';
import * as Actions from './../actions/Action';



 export default class FacebookButton extends React.Component {
   constructor(props) {
      super(props);

      this.FB = props.fb;

      this.state = {
         message: ""
      };
   }


   componentDidMount() {
      this.FB.Event.subscribe('auth.logout',
         this.onLogout.bind(this));
    //  this.FB.Event.subscribe('auth.statusChange',
      //   this.onStatusChange.bind(this));
   }


   onStatusChange(response) {
     var userid ="";
     FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token
    // and signed request each expire
    console.log("conne response ", response);
    console.log("aldready connected"+response.email);
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook,
    // but has not authenticated your app
    console.log("not authorized");
  } else {
    // the user isn't logged in to Facebook.
    console.log("logged out");
    FB.login(function(response) {
      console.log("FBLOGIN",response);

        if (response.authResponse) {
          var accessToken = response.authResponse.accessToken;
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me?fields=name,email', function(response) {
           console.log(response);
           console.log('Good to see you, ' + response.name + '.'+response.email);
           //fbregisterUser().bind(response);
           Actions.fbRegisteredUser(response.id, response.email, response.name, accessToken);
           //userid = response.id;
           //Login.registerUser1();
           //FacebookButton.func();
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    },{scope:'email'});
  }

});

    /* console.log("babila response");
console.log(response);
     FB.login(function(response) {
       console.log("FBLOGIN",response);
         if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me?fields=name,email', function(response) {
            console.log(response);
            console.log('Good to see you, ' + response.name + '.'+response.email);
          });
         } else {
          console.log('User cancelled login or did not fully authorize.');
         }
     },{scope:'email'}
   );*/

      /*console.log( response );
      var self = this;

      if( response.status === "connected" ) {
         this.FB.api('/me', function(response) {
           console.log("response from fb api");
           console.log(response);
            var message = "Welcome " + response.name;
            self.setState({
               message: message
            });
         })
      }*/

   }

   onLogout(response) {
      this.setState({
         message: ""
      });
   }



   render() {
      return (
         <div>
         <button className="btn btn-primary btn-block"onClick= {this.onStatusChange.bind(this)}>Facebook</button>
         </div>
      );
   }
};

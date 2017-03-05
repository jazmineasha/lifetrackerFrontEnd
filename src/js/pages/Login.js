import React from 'react';
require("./../../css/LoginStyle.css");
import FacebookButton from "./../components/Facebook";
import * as Actions from './../actions/Action'

class Login extends React.Component {

  constructor() {
    super();
  }
/*  componentDidMount() {
      document.addEventListener('fb_init', e => FB.XFBML.parse());
  }*/



  registerUser(userid, userName, useremail, accessToken) {
     axios({
      			url: "http://10.0.0.235:8080/lifetracker/login/login/fblogin?userid=123243432&emailid=ramu_kaka.a@gmail.com&username=jramukaka",
      			timeout: 20000,
      			method: 'get',
      			responseType: 'json'
      		})
      			.then(function(response) {
              console.log("server returned data",response);
              //Actions.registeredUser()
      				//dispatch(receiveData(response.data));
      			})
      			.catch(function(response){
              console.log("error",response);
      				//dispatch(receiveError(response.data));
      				//dispatch(pushState(null,'/error'));
      			})
  }



  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <h2>Fancy Login / Registration form</h2>
          </div>
          </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-body">
                    <ul className="nav nav-tabs final-login">
                      <li className="active"><a data-toggle="tab" href="#sectionA">Sign In</a></li>
                      <li><a data-toggle="tab" href="#sectionB">Join us!</a></li>
                    </ul>
                  <div className="tab-content">
                    <div id="sectionA" className="tab-pane fade in active">
                      <div className="innter-form">
                        <form className="sa-innate-form" method="post">
                          <label>Email Address</label>
                          <input type="text" name="username"/>
                          <label>Password</label>
                          <input type="password" name="password"/>
                          <button type="submit">Sign In</button>
                          <a href="">Forgot Password?</a>
                        </form>
                      </div>
                      <div className="social-login">
                        <p>- - - - - - - - - - - - - Sign In With - - - - - - - - - - - - - </p>
                        <ul>
                          <li><FacebookButton fb={FB}/></li>
                          <li><div><a href="" role="button" className="btn btn-danger btn-block"> Google+</a></div></li>
                          <li><div><a href="" role="button" className="btn btn-info btn-block"> Twitter</a></div></li>
                          </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div id="sectionB" className="tab-pane fade">
                      <div className="innter-form">
                        <form className="sa-innate-form" method="post">
                          <label>Name</label>
                          <input type="text" ref="inputUserName" name="username"/>
                          <label>Email Address</label>
                          <input type="text" ref="inputUserEmail" name="useremail"/>
                          <label>Password</label>
                          <input type="password" ref="inputUserPassword" name="password"/>
                          <button type="submit" onClick = {(e) => this.registerUser(this.refs.inputUserName.value,
                                                                                    this.refs.inputUserEmail.value,
                                                                                    this.refs.inputUserPassword)}>Join now</button>
                          <p>By clicking Join now, you agree to hifriends's User Agreement, Privacy Policy, and Cookie Policy.</p>
                        </form>
                      </div>
                      <div className="social-login">
                        <p>- - - - - - - - - - - - - Register With - - - - - - - - - - - - - </p>
                        <ul>
                        <li><FacebookButton fb={FB}/></li>
                        <li><div><a href="" role="button" className="btn btn-danger btn-block"> Google+</a></div></li>
                        <li><div><a href="" role="button" className="btn btn-info btn-block"> Twitter</a></div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
    }
  }

  export default Login;

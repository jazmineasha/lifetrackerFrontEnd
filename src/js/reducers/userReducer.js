import axios from 'axios'
import queryString from 'query-string';
var user = {
  userId : "",
  userName : "",
  emailId: "",
  accessToken: ""
}

const userReducer = (state={user}, action) => {
  console.log("state", state);
  console.log("in user reducer "+action.userid);
  var newState = Object.assign({},state);
  switch(action.type){

    case "FB REGISTERED USER":
      console.log("fb user reducer");
      var newUser ={
        userid:action.userId,
        emailid:action.userEmail,
        username:action.userName,
        accessToken:action.accessToken
      };
      fetch('http://localhost:8080/lifetracker/login/login/fblogin', {
    method: 'post',
    headers: {'Content-Type':'application/x-www-form-urlencoded',
    'Cache-Control': 'no-cache',
  "Accept": "application/json"},
     body:  queryString.stringify(newUser)
})
.then((response) => {
    console.log('Works!',response);
    response.json().then(function(data) {
        console.log(data);
      });

    newState.user = [...newState.user,{ userId : action.userId,
    userName : action.userName,
    emailId: action.userEmail,
    accessToken: action.accessToken}];
});
break;

  }
return newState;

}

export default userReducer;

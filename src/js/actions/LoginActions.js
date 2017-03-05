import store from './../stores/oneStore';

export function registerUser (name,email,password) {
 store.dispatch({
     type: "REGISTER USER",
     user:{}});

}

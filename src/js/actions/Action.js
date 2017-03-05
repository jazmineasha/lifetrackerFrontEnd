/*import dispatcher from './../dispatcher/dispatcher'*/
import store from './../stores/oneStore'


export function createTodo (name) {
 store.dispatch({
     type: "CREATE TODO",
     name: name});

}

export function deleteTodo(todoItem) {
  store.dispatch({
    type:"DELETE TODO",
    id:todoItem
  });
}

export function fbRegisteredUser(userId, userEmail, userName, accessToken) {
    store.dispatch({
      type: "FB REGISTERED USER",
      userId: userId,
      userEmail: userEmail,
      userName: userName,
      accessToken: accessToken
    });
}

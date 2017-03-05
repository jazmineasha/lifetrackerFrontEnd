import {EventEmitter} from 'events'
import dispatcher from './../dispatcher/dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.userid = null,
    this.todos = [
      {
        id : 1,
        name : "go trader joes"
      },
      {
        id : 2,
        name : "go walmart"
      }]
    }

    createTodo (name) {
      const id = Date.now();
      //console.log("calling todo"+name)
      this.todos.push({id,name});

      this.emit("change");
    }

    setUserId (userid) {
      console.log("set user id is called");
      this.userid = userid;
    }

    getTodos() {
      return this.todos;
    }

    handleActions(action) {
      switch (action.type) {
        case "CREATE TODO":
          console.log("event received to add");
          this.createTodo(action.name);
          break;
        case "deleteTodo":
          console.log("event received to delete");
          break;
        case "REGISTERED USER"
          console.log("event received after registering user");
          this.setUserId(action.userid);
          break;

      }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;

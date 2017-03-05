
const todos = [
    {
      id : 1,
      name : "go trader joes"
    },
    {
      id : 2,
      name : "go walmart"
    }];

 const nameReducer = (state={todos}, action) => {
   console.log("state", state);
   var newState = Object.assign({},state);
   switch(action.type){
     case "CREATE TODO":
        newState.todos = [...newState.todos,{id: Date.now(),
                          name: action.name}];
      break;
      case "DELETE TODO":
      console.log(action.id);
       newState.todos = newState.todos.filter(function (el){ return action.id != el.id});

       break;
   }
return newState;

}



export default nameReducer;

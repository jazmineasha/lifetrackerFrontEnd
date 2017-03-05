import React from 'react'
import Todo from './../components/Todo'
import store from './../stores/oneStore'
import * as Actions from './../actions/Action'
//import CSSModules from 'react-css-modules';
import {connect} from "react-redux"
require("./../../css/FeaturedStyle.css");

/*{@connect((store)=> {
  return{
    todos: store.todos
  };
})}*/
function mapStateToProps(state) {
  console.log("mapStateToProps",state);
  return { todos: state.todos };
}


class Featured extends React.Component {

constructor() {
super();
}

componentWillMount() {
  console.log(this.props);

}

componentWillUnMount() {
  //this.state.unregister();
}


  render() {
    console.log("featured");
    console.log(this.props);
    const {todos} = this.props;



    const todoComponent = todos.map((todoItem, i)=>{ return <Todo key ={todoItem.id} {...todoItem} />});

      return (
        <div className="divStyle">
        <h2>Featured</h2>
        <ul>{todoComponent}</ul>
        <input ref="input1" id="inputLabel" type="text"  />
       <button onClick={(e)=> {Actions.createTodo(this.refs.input1.value)}}> Add Todo</button>
        </div>
      );
  }

}

export default connect(mapStateToProps)(Featured);

//const FeaturedWithCSS = CSSModules(Featured, FeaturedStyle);
//export default connect(mapStateToProps)(FeaturedWithCSS);

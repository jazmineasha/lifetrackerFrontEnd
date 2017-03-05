import React from "react"

import * as Actions from './../actions/Action'
export default class Todo extends React.Component {

  render() {
    console.log(this.props);
    return (
      <li><button onClick={(e)=>{Actions.deleteTodo(this.props.id)}} >delete</button>{this.props.name}</li>
    );
  }

}

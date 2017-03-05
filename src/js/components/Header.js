import React from "react";
import Title from "./Header/Title"

export default class Header extends React.Component {
  changeValue (e) {
    const inputVal= e.target.value;
    this.props.changeHeader(inputVal);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Title title={this.props.title}/>
        <input onChange = {this.changeValue.bind(this)}/>
      </div>
    );

  }
}

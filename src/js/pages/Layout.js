import React from "react";
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import {Link} from "react-router"


export default class Layout extends React.Component {
  /*constructor() {
    super();
    this.state = {
      name : "Will"
    };

  }
  changeHeader(val) {
    this.setState({
      name : val
    });
  }*/
  render() {
    //setTimeout(()=>{this.setState({name : "Bob"})},1000);
  //  const title = "welcome jasmine";
    console.log("layout");
  console.log(this.props);
    return (
      <div>
        {/*<Header title={title} otherVal={"new val"} changeHeader={this.changeHeader.bind(this)}/>*/}

        <h1>Layout Pages Link</h1>
        <Link to="archives"> Archives</Link>
        <Link to="settings"> Settings</Link>
        <Link to="featured"> Featured</Link>
          {this.props.children}
        <Footer />
      </div>
    );

  }
}

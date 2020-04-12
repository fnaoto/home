import React from "react";
import '../App.css';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "Welcome!" };
  }
  render() {
    setTimeout(
      () => { this.setState({ name: "I am Naoto, Fukuda" }); }
      , 1000);
    return (
        <header className="App-layout">
          <h2>{this.state.name}</h2>
        </header>
    );
  }
}

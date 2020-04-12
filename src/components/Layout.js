import React, { Component } from "react";
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import GitHub from "../png/github.png";
import Qiita from "../png/qiita.png";
import Wantedly from "../png/wantedly.png";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = { name: "Hello" };
  }
  render() {
    setTimeout(
      () => { this.setState({ name: "I am Naoto, Fukuda" }); }
      , 1000);
    return (
      <div className="App">
        <header className="App-header">
          <h2><Header /></h2>
          <h1>{this.state.name}</h1>
          <h4>
            <a href="https://qiita.com/fnaoto">
              <img src={Qiita} className="App-logo" alt="@Qiita" />
            </a>
            <a href="https://www.wantedly.com/users/47203885">
              <img src={Wantedly} className="App-logo" alt="@Wantedly" />
            </a>
            <a href="https://github.com/fnaoto">
              <img src={GitHub} className="App-logo" alt="@GitHub" />
            </a>
          </h4>
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

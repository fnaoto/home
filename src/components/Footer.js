import React from "react";
import '../App.css';
import GitHub from "../png/github.png";
import Qiita from "../png/qiita.png";
import Wantedly from "../png/wantedly.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <h3 className="App-underline">Links</h3>
        <h3>
          <a href="https://qiita.com/fnaoto">
            <img src={Qiita} className="App-logo" alt="@Qiita" />
          </a>
          <a href="https://www.wantedly.com/users/47203885">
            <img src={Wantedly} className="App-logo" alt="@Wantedly" />
          </a>
          <a href="https://github.com/fnaoto">
            <img src={GitHub} className="App-logo" alt="@GitHub" />
          </a>
        </h3>
      </footer>
    );
  }
}

import React from "react";
import '../App.css';
import Icon from "../png/icon.jpeg";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={Icon} className="App-header" alt="@fnaoto" />
      </header>
    );
  }
}

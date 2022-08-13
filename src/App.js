import React, { Component } from "react";
import banana from "./img/banana.jpg";
export default class Exercise extends Component {
  state = {
    name: "Rafael Navarro",
    age: 27,
    favoriteFood: ["Pizza", " ", "Hamburguer"],
    favoriteSong: ["Joelma", "Legião Urbana", "Ivete Sangalo"]
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.age}</h2>
          <h3>{this.state.favoriteFood}</h3>
          <ul>
            <li>{this.state.favoriteSong[0]}</li>
            <li>{this.state.favoriteSong[1]}</li>
            <li>{this.state.favoriteSong[2]}</li>
          </ul>
          <img src={banana} alt="banana" />
        </div>
      </>
    );
  }
}

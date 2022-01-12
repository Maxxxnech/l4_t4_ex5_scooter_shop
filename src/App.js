import React, { Component } from "react";
import "./App.css";
import scooters from "./data/scooters.json";
import Scooter from "./components/Scooter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scooters: scooters };
    this.toggleMarked = this.toggleMarked.bind(this);
  }

  toggleMarked(id) {
    const scootersClone = JSON.parse(JSON.stringify(this.state.scooters));
    const currentScooter = scootersClone.find((s) => s.id === id);
    if (currentScooter) {
      currentScooter.marked = !currentScooter.marked;
    }
    this.setState({ scooters: scootersClone });
  }

  render() {
    return (
      <div className="App">
        <h1>l4_t4, задание 5: прокат самокатов</h1>
        <main>
          {this.state.scooters.map((s, i) => (
            <Scooter key={i} data={s} handleClick={this.toggleMarked} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;

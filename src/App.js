import React, { Component } from "react";
import "./App.css";
import scooters from "./data/scooters.json";
import Scooter from "./components/Scooter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scooters: scooters };
    this.toggleMarked = this.toggleMarked.bind(this);
    this.markAll = this.markAll.bind(this);
  }

  toggleMarked(id) {
    const scootersClone = JSON.parse(JSON.stringify(this.state.scooters));
    const currentScooter = scootersClone.find((s) => s.id === id);
    if (currentScooter) {
      currentScooter.marked = !currentScooter.marked;
    }
    this.setState({ scooters: scootersClone });
  }
  
  markAll(mark){
    const scootersAllMarked = this.state.scooters.map(el => ({...el, marked: mark}) )
    this.setState({scooters: scootersAllMarked});
    console.log(this.state.scooters)
  }

  render() {
    return (
      <div className="App">
        <header>
        <h1>l4_t4, задание 5: прокат самокатов</h1>
        <button onClick={()=>this.markAll(true)}>Выделить все</button>
        <button onClick={()=>this.markAll(false)}>Убрать выделение</button>
        
        </header>
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

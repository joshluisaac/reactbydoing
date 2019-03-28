import React, {Component} from "react";
import './App.css';
import NavBar from './components/NavBar'
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    //clone the parent counters array
    const counters = [...this.state.counters];
    //get the index of the current counter
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    console.log("Event handler clicked", counterId);
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0 ).length}
          />
        <main className="container">
           <Counters
             counters={this.state.counters}
             onRest={this.handleReset}
             onIncrement={this.handleIncrement}
             onDelete={this.handleDelete} />
        </main>
      </React.Fragment>);
  }
}

export default App;

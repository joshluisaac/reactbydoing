import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object/argument destructuring
    const { onRest, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onRest} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            selected={true}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

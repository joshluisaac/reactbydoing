import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  _styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // caller (which is a button) will call this as a function reference and not as
  // an actual function.
  handleIncrement(product) {
    console.log(product);
    //console.log("Increment Clicked!", this);
    this.setState({ count: this.state.count + 1 });
  }

  //using lambda or arrow function
  // handleIncrement = () => {
  //console.log("Increment Clicked!", this);
  //}

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;

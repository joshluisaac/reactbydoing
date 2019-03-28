import React, { Component } from "react";

class Counter extends Component {
  //this state is executed once only when an instance of this
  //class is created.
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    console.log(this);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderTagsMsg() {
    return this.state.tags.length === 0 && "Please create a new tag";
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

  _styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
}

export default Counter;

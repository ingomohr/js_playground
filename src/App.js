import React, { Component } from "react";
import "./App.css";
import Rating from "./Rating";
import { connect } from "react-redux";

// ...

const todos = [
  { descr: "buy groceries", id: "gr" },
  { descr: "do some cooking", id: "co" },
  { descr: "do some stuff", id: "st" }
];

function mapStateToProps(state) {
  return { count: state };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      time: new Date(),
      imgID: 0,
      inputText: "",
      inputText2: "",
      stars: 4
    };

    setInterval(this.updateTime, 1000);
  }

  getImgUrl = () => {
    return `https://picsum.photos/200/300?image=${this.state.imgID}`;
  };

  /**
   * Updates the time.
   *
   * @param foo the foo
   */
  updateTime = () => {
    this.setState({ time: new Date() });
  };

  prevImg = () => {
    let newID = Math.max(0, this.state.imgID - 1);
    this.setState(oldState => ({ imgID: newID }));
  };

  nextImg = () => {
    let newID = Math.min(300, this.state.imgID + 1);
    this.setState(oldState => ({ imgID: newID }));
  };

  render() {
    return (
      <div className="App">
        Hallo, ich bin {2018 - 1970} Jahre alt.<br />
        New date is {this.state.time.toLocaleString()}.<br />
        <p>
          <input
            value={this.state.inputText}
            onChange={event => {
              let newVal = event.target.value;
              this.setState({ inputText: newVal });
            }}
          />
          <br />
          New Input string: {this.state.inputText}
        </p>
        <p>
          <input
            value={this.state.inputText2}
            onChange={event => {
              let newVal = event.target.value.toLowerCase();
              this.setState({ inputText2: newVal });
            }}
          />
          <br />
          New Input string: {this.state.inputText2}
        </p>
        <p>
          <button
            onClick={() => {
              this.prevImg();
            }}
          >
            Prev
          </button>
          <img src={this.getImgUrl()} alt="some text" />
          <button
            onClick={() => {
              this.nextImg();
            }}
          >
            Next
          </button>
        </p>
        <br />
        <ul>{todos.map(todo => <li key={todo.id}>{todo.descr}</li>)}</ul>
        <br />
        <button
          onClick={() => {
            this.setState(oldState => ({ count: oldState.count + 1 }));
          }}
        >
          Count is {this.state.count}
        </button>
        <Rating/>
        <div>Count from Redux State: {this.props.count}</div>
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;

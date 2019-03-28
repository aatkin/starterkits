import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "./actions";
import "./App.css";

const todos = [
  "I'm completely random data number 1",
  "Sounds like grocery shopping to me",
  "Better fix that react code soon",
  "Ohhhhhh boy"
];

const getRandomTodo = () => {
  const idx = Math.floor(Math.random() * todos.length);
  return todos[idx];
};

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.props.onTodoClick(getRandomTodo())}>Add a todo!</button>
          {this.props.todos.map((todo, index) => (
            <p key={index}>{todo}</p>
          ))}
        </header>
      </div>
    );
  }
}

// here we map redux state (different from react state) to props that are
// passed to our <App /> component
// this would be similar to doing <App todos={[...]} /> without redux
// reducers.js contains initial state, which is what we are mapping from here
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// here we map props that are something called actions
// the dispatch object passed to this callback interacts with redux store
// by sending ("dispatching") action objects to the reducer mechanism (see reducers.js)
// actions.js contains the action that is dispatched here
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: text => {
      dispatch(addTodo(text));
    }
  };
};

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppComponent;

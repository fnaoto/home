import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, removeToDo } from './action';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  render() {
    const { onAddToDo, onRemoveToDo } = this.props;
    const { input } = this.state;
    return (
      <div className="App" >
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo}>
                <spam>{todo} </spam>
                <button onClick={
                  () => onRemoveToDo(todo)
                }>DELETE</button>
              </li>
            );
          })}
        </ul>
        <input type="text" onChange={
          e => this.setState(
            {
              input: e.target.value
            }
          )
        } />
        <button onClick={
          () => onAddToDo(input)
        }>ADD</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToDo(todo) {
      dispatch(addToDo(todo))
    },
    onRemoveToDo(todo) {
      dispatch(removeToDo(todo))
    }
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

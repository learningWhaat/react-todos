import React from 'react';
import TodoList from './todo-list';

const todos = [
  {
    task: "Move on from here",
    isCompleted: false
  },
  {
    task: "Move here from on",
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h3> React Todos</h3>
        <TodoList todos={this.state.todos}/>
      </div>
      );
  }
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: '',
      });
    }
  }

  removeTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div className="toDoList">
        <h1 className="title">To-Do List</h1>
        <div>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleTaskChange}
            placeholder="Add a new task"
            className="inputAdd"
          />
          <br/>
          <button onClick={this.addTask} className="btnAdd">Add</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index} className="listItem">
              {task} <button onClick={() => this.removeTask(index)} className="btnRemove">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <TaskList />,
  document.getElementById('react-app')
);

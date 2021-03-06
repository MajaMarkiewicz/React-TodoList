import React from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

class Todolist extends React.Component {
  state = {
    todos: [],
    display: "all"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
    console.log(this.state.todos);
  };

  handleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateDisplay = string => {
    this.setState({
      display: string
    });
  };

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    let displayedTodos = [];

    if (this.state.display === "all") {
      displayedTodos = this.state.todos;
    } else if (this.state.display === "active") {
      displayedTodos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.display === "completed") {
      displayedTodos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className="main-container">
        <Todoform onSubmit={this.addTodo} />
        <div className="todos-container">
          {displayedTodos.map(todo => (
            <Todo
              key={todo.id}
              onComplete={() => this.handleComplete(todo.id)}
              onDelete={() => this.handleDelete(todo.id)}
              todo={todo}
            />
          ))}
        </div>
        <button
          onClick={() => this.updateDisplay("all")}
          className="btn"
          style={{
            background: this.state.display === "all" ? "#2471a3" : "#d4e6f1",
            color: this.state.display === "all" ? "white" : "#2471a3"
          }}
        >
          Show All: {this.state.todos.length}
        </button>
        <button
          onClick={() => this.updateDisplay("active")}
          className="btn"
          style={{
            marginLeft: "10px",
            background: this.state.display === "active" ? "#2471a3" : "#d4e6f1",
            color: this.state.display === "active" ? "white" : "#2471a3"
          }}
        >
          Show Active:{" "}
          {this.state.todos.filter(todo => todo.complete === false).length}
        </button>
        <button
          onClick={() => this.updateDisplay("completed")}
          className="btn"
          style={{
            marginLeft: "10px",
            background:
              this.state.display === "completed" ? "#2471a3" : "#d4e6f1",
            color: this.state.display === "completed" ? "white" : "#2471a3"
          }}
        >
          Show Completed:{" "}
          {this.state.todos.filter(todo => todo.complete).length}
        </button>
      </div>
    );
  }
}

export default Todolist;

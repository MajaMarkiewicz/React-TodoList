import React from "react";

export default props => (
  <div className="todo-container">
    <label
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        marginRight: "10px"
      }}
    >
      <input type="checkbox" onClick={props.onComplete} /> {props.todo.text}
    </label>
    <button onClick={props.onDelete} className="btn">
      Delete
    </button>
  </div>
);

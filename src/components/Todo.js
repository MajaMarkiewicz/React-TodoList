import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.onComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.onComplete}>
      {props.todo.complete ? "Activate" : "Complete"}
    </button>
    <button onClick={props.onDelete}>Delete</button>
  </div>
);

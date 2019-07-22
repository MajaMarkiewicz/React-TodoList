import React from "react";

class Todoform extends React.Component {
  state = {
    text: "",
    id: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id + 1,
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: "",
      id: this.state.id + 1
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name={"text"}
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}

export default Todoform;

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
    if (this.state.text !== "") {
      this.props.onSubmit({
        id: this.state.id + 1,
        text: this.state.text,
        complete: false
      });
      this.setState({
        text: "",
        id: this.state.id + 1
      });
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          marginBottom: "40px"
        }}
      >
        <input
          name={"text"}
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Your task name"
          style={{
            flex: "10 1",
            padding: "5px",
            border: "1px solid #d4e6f1"
          }}
        />
        <input
          type="submit"
          value="Add task"
          className="btn"
          onClick={this.handleSubmit}
          style={{
            flex: "1 1",
            borderBottomLeftRadius: "0px",
            borderTopLeftRadius: "0px"
          }}
        />
      </form>
    );
  }
}

export default Todoform;

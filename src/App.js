import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todolist />
      </div>
    );
  }
}
export default App;

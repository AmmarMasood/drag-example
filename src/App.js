import React, { Component } from "react";
import "./App.css";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: "",
      y: "",
      x2: "",
      y2: ""
    };
  }

  handleDrag = e => {
    console.log(e);
    this.setState({ ...this.state, x: e.screenX, y: e.screenY });
  };
  handleDrag2 = e => {
    console.log(e);
    this.setState({ ...this.state, x2: e.screenX, y2: e.screenY });
  };
  render() {
    return (
      <div className="App">
        <div
          style={{
            width: "80%",
            height: "80%",
            border: "10px solid black",
            // top: "20%",
            position: "absolute"
            // left: "15%",
            // transform: "translate(15%, 20%)"
          }}
        >
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div
              className="handle"
              style={{
                border: "2px solid black",
                padding: "50px",
                cursor: "pointer",
                width: "100px",
                backgroundColor: "#B0E0E6"
              }}
            >
              <div>Click and Drag Me</div>
              <div>
                x: {this.state.x}, y: {this.state.y}
              </div>
            </div>
          </Draggable>
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag2}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div
              className="handle"
              style={{
                border: "2px solid black",
                padding: "50px",
                cursor: "pointer",
                width: "100px",
                backgroundColor: "#FFC0CB"
              }}
            >
              <div>Click and Drag Me</div>
              <div>
                x: {this.state.x2}, y: {this.state.y2}
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;

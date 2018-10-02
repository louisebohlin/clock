import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    time: new Date ()
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
  })
}

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    )
  }

}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))

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

    tick = () => {
      this.setState({
        time: new Date()
      })
    }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  render() {
    return (
    <div className="container">

      <div className="welcome">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
      <div className="buttons">
        <button onClick={this.componentWillUnmount}>Stop time</button>
        <button onClick={this.componentDidMount}>Start time</button>
      </div>
    </div>
    )
  }

}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))

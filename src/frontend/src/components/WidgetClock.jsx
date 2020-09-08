import React from 'react';

let appClock = {
    fontWeight: "bold"
}

class Clock extends React.Component {
    constructor(props) {
      let today = new Date();
      super(props);
      this.state = {
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      let today = new Date();
      this.setState({
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      });
    }
    render() {
      return (
        <div style={appClock}>
          {this.state.time}
        </div>
      );
    }
  }

  export default Clock;
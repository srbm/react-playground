import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  handleClick = () => {
    // console.log(this)
    this.setState({
      spinningTheChamber: true,
    });
    this.timeOut = setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 8 + 1);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false,
      });
      console.log(this.state.chamber);
    }, 2000);

  }
  render() {
    return (
      <div>
        <p>
        RouletteGun: {(this.state.spinningTheChamber) ?
                      'spinning the chamber and pulling the trigger! ...' :
                      ((this.state.chamber === this.props.bulletInChamber) ?
                      'BANG!!!!' : "you're safe")}
        </p>
        <button onClick={this.handleClick}>Pull the trigger!</button> 
      </div>
    )
  }
}

export default RouletteGun;
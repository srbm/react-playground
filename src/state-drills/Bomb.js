import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      word: 'tick',
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state);
      const newCount = this.state.count + 1;
      let newWord = 'tock'
      if (newCount >= 8) {
        newWord = 'BOOM!!!'
      } else if (newCount % 2 !== 0) {
        newWord = 'tock';
      } else if (newCount % 2 === 0) {
        newWord = 'tick';
      }
      this.setState({
        count: newCount,
        word: newWord,
      })
    }, 1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p>{this.state.word}</p>
      </div>
    );
  }
}
export default Bomb;
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateButton = () => this.setState({number: Math.ceil(Math.random() * 100)})

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading-style">Random Number</h1>
          <p className="paragraph-style">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button-style"
            type="button"
            onClick={this.generateButton}
          >
            Generate
          </button>
          <p className="random-number-style">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

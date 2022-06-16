// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
          <div className="input-container">
            <h1 className="heading">Calculate the letters you enter</h1>

            <label htmlFor="hello">Enter the phrase</label>
            <input
              className="input"
              type="text"
              id="hello"
              onChange={this.onChangeInput}
              value={inputPhrase}
              placeholder="Enter the phrase"
            />
            <p className="paraButton">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    evenOrOdd: 'Even',
  }

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    if (randomNumber % 2 === 0) {
      this.setState(() => ({count: randomNumber, evenOrOdd: 'Even'}))
    } else {
      this.setState(() => ({count: randomNumber, evenOrOdd: 'Odd'}))
    }
  }

  render() {
    const {count, evenOrOdd} = this.state
    return (
      <div className="outer-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {evenOrOdd}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

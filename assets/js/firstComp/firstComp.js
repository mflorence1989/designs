import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'mario'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div '>
        
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

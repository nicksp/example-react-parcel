import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'

class Example extends PureComponent {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

ReactDOM.render(
  <Example name='Motto' />,
  document.getElementById('app')
)

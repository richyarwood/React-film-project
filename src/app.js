import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

import Home from './components/Home'


import './style.scss'

class App extends React.Component {
  render() {
    return(
      <section className="section">
        <Home />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

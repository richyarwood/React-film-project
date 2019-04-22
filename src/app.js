import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'

import Home from './components/Home'
import FilmShow from './components/FilmShow'


import './style.scss'

class App extends React.Component {
  render() {
    return(
      <Router>
        <section className="section">
          <Switch>
            <Route path="/films/:id" component={FilmShow} />
            <Route exact path='/' component={Home} />
          </Switch>
        </section>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

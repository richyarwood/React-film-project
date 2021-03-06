import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'

import Home from './components/Home'
import FilmShow from './components/FilmShow'
import NavBar from './components/NavBar'

import './style.scss'

class App extends React.Component {
  render() {
    return(
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path='/films/:id' component={FilmShow} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

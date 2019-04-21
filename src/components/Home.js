import React from 'react'
import axios from 'axios'

import FilmIndex from './FilmIndex'

class Home extends React.Component {

  constructor(){
    super()

    this.state = {
      searchInput: [],
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const data = ({ ...this.state.searchInput, [e.target.name]: e.target.value })
    this.setState({ searchInput: data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?&apikey=3d00f47d&s="${this.state.searchInput}"`)
    .then(res => this.setState({ data: res.data }))
  }

  render() {
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
                <input
                  className="input"
                  type="text"
                  name="searchInput"
                  placeholder="Search for a film. Eg Bladerunner"
                  onChange={this.handleChange}
                  />
            </div>
          </div>
          <button className="button is-black">Search</button>
        </form>
        <section className="section">
        <FilmIndex { ...this.state.data } />
        </section>
      </div>
    )
  }
}

export default Home

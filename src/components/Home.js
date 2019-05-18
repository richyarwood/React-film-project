import React from 'react'
import axios from 'axios'

import FilmIndex from './FilmIndex'

class Home extends React.Component {

  constructor(){
    super()

    this.state = {
      search: [],
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const data = ({ ...this.state.search, [e.target.name]: e.target.value })
    this.setState({ search: data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?&apikey=3d00f47d&s="${this.state.search.searchInput}"`)
      .then(res => this.setState({ data: res.data })
      )
  }

  render() {
    if(this.state.data.Response === 'False')
      return (
        <section className="section">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="searchInput"
                  placeholder="Search for a film. Eg Blade Runner"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-black">Search</button>
          </form>
          <section className="section">
            <div className="notification is-danger">No film of that name. Search again</div>
          </section>
        </section>
      )
    console.log(this.state.data)
    return(
      <section className="section">
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
      </section>
    )
  }
}

export default Home

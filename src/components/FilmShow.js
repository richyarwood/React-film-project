import React from 'react'
import axios from 'axios'

class FilmShow extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      film: null
    }
  }

  componentDidMount(){
    axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=3d00f47d&plot=full`)
      .then(res => this.setState({ film: res.data }))
  }

  render() {
    console.log(this.state)
    if(!this.state.film) return null

    return(
      <section className="section">

        <div className="columns">
          <div className="column is-one-third-desktop">
            <figure>
              {<img src={this.state.film.Poster} alt={this.state.film.Title} />}
            </figure>
          </div>
          <div className="column is-two-thirds-desktop">
            <div className="title is-3">{this.state.film.Title}</div>
            <div className="content">

              <div className="columns">
                <div className="column is-one-half">
                  <p><strong>Year:</strong> {this.state.film.Year}</p>
                  <p><strong>Rated:</strong> {this.state.film.Rated}</p>
                  <p><strong>Released:</strong> {this.state.film.Released}</p>
                  <p><strong>Runtime:</strong> {this.state.film.Runtime}</p>
                  <p><strong>Genre:</strong> {this.state.film.Genre}</p>
                </div>
                <div className="column is-one-half">
                  <p><strong>Director:</strong> {this.state.film.Director}</p>
                  <p><strong>Writers:</strong> {this.state.film.Writer}</p>
                  <p><strong>Actors:</strong> {this.state.film.Actors}</p>
                  <p><strong>Awards:</strong> {this.state.film.Awards}</p>
                </div>
              </div>


              <div className="subtitle is-5">Plot</div>
              <p>{this.state.film.Plot}</p>
            </div>
          </div>
        </div>

      </section>



    )
  }
}

export default FilmShow

import React from 'react'
import { Link } from 'react-router-dom'

import FilmCard from './FilmCard'

class FilmIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(!this.props.Search) return null
    return(
      <div className="columns is-multiline">
      
        {this.props.Search.map(film =>
          <div key={film.imdbID} className="column is-one-fifth-desktop is-one-half-tablet">
            <Link to={`/films/${film.imdbID}`}>
              <FilmCard {...film} />
            </Link>
          </div>
        )}

      </div>
    )
  }
}

export default FilmIndex

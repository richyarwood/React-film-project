import React from 'react'


class FilmIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props, 'filmindex')
    if(!this.props.Search) return null
    return(
      <section className="section">
        {this.props.Search.map(film =>
          <div key={film.imdbID} className="column is-one-quarter-desktop is-one-third-tablet">
            {film.Title}
          </div>
        )}

      </section>
    )
  }
}

export default FilmIndex

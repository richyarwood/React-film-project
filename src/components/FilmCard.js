import React from 'react'

const FilmCard = (props) =>{
  return(

    <div className="card">
      <div className="card-image">
        <figure>
          {<img src={props.Poster} alt={props.Title} />}
        </figure>
      </div>
      <div className="card-content">
        <div className="title is-5">{props.Title}</div>
        <div className="subtitle is-6">{props.Year}</div>
      </div>
    </div>
  )
}

export default FilmCard

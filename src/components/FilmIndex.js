import React from 'react'


class FilmIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props)
    if(!this.props.Search) return null
    return(
      <h1>Hello</h1>
    )
  }
}

export default FilmIndex

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
    axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=3d00f47d`)
      .then(res => this.setState({ film: res.data }))
  }

  render() {
    console.log(this.state)
    if(!this.state.film) return null

    return(
      <section className="section">

        <div>Hello</div>
        {this.state.film.Title}

      </section>



    )
  }
}

export default FilmShow

import React from 'react'

class Home extends React.Component {

  constructor(){
    super()

    this.data = {
      data: []
    }
  }

  render(){
    return(
      <div className="container">
        <form>
          <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <button className="button is-black">Search</button>
        </form>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react';
import celebrityList from "./celebrityList";


let mapCelebrity = celebrityList.map((celebrity) => {
  const likeFan = () => {
    alert(`I AM A BIG FAN OF ${celebrity.name.toUpperCase()}!`)
  }

  const dislikeFan = () => {
    alert(`I AM NOT A BIG FAN OF ${celebrity.name.toUpperCase()}!`)
  }
  return (
    <div key={celebrity.id} >
      <div className="card mt-2" >
        <div className="card-body">
          <img src={celebrity.picture} style={{ width: "120px" }} alt="user profile" />
          <h6 className="mt-2" style={{ color: "#FF4E50" }}>{celebrity.name.toUpperCase()}</h6>
          <h6 className="mt-2" style={{ color: "#FF4E50" }}>{celebrity.profession}</h6>
          <span>{celebrity.nationality}</span>
          <div className="flex-container">
            <div>
              <i className="fa fa-remove">
                <span className="like" onClick={likeFan}>LIKE</span>
              </i>
            </div>
            <div>
              <i className="fa fa-check" >
                <span className="dislike" onClick={dislikeFan}>DISLIKE</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
})

class Celebrity extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="mt-5 text-center">{this.props.title}</h3>
        {mapCelebrity}
      </div>
    )
  }
}

export default Celebrity;

import React, { Component } from 'react'

export class modal extends Component {
  render() {
    let showModal = (
      <div className="card p-2">
        <button onClick={this.props.closeModal} className="remove-button">X</button>
        <h6 className="text-center mb-2">THIS APP IS A JUST A CREATIVE APP</h6>
      </div>
    )

    if (!this.props.openModal) {
      showModal = null;
    }
    return (
      <div>{showModal}</div>
    )
  }
}

export default modal

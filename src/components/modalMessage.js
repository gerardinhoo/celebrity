import React, { Component } from 'react';
import Modal from "./modal"

export class ModalMessage extends Component {
  state = {
    openModal: false
  }
  render() {
    return (
      <div>
        <button onClick={(e) => {
          this.setState({ openModal: true })
        }}
          className="openModal"
        >
          <h6 className="info">CLICK FOR IMPORTANT INFOS</h6>
        </button>
        <Modal
          openModal={this.state.openModal}
          closeModal={(e => { this.setState({ openModal: false }) })}
        >
          <h4>{this.props.children}</h4>
        </Modal>
      </div>
    )
  }
}

export default ModalMessage

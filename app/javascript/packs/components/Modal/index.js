import React from 'react'

import './styles.css'

import posed from 'react-pose'

const PosedModal = posed.div({
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 300,
      delay: 0
    }
  }
})

const Modal = ({modal, content, setModal}) => {
  return (
    <PosedModal pose={`${modal ? "visible" : "invisible"}`} className="modal-container" onClick={() => setModal(!modal)} style={{display: `${modal ? 'flex' : 'none'}`}}>
      <div className="modal">
        <div className="item-title-container">
          <div className="item-title">
            {content.title}
          </div>
        </div>
        <div className="item-content-container">
          <div className="item-content">
            {content.content}
          </div>
        </div>
        <div className="item-photo-container">
          <div className="item-photo">
          </div>
        </div>
      </div>
    </PosedModal>
  )
}

export default Modal

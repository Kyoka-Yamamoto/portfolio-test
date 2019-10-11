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

const Modal = ({modal, title, setModal}) => {
  return (
    <PosedModal pose={`${modal ? "visible" : "invisible"}`} className="modal-container" onClick={() => setModal(!modal)} style={{display: `${modal ? 'flex' : 'none'}`}}>
      <div className="modal">
        {title}
      </div>
    </PosedModal>
  )
}

export default Modal

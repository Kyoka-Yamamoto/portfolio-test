import React, { useState } from 'react'

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
  const [activeSubscription, setActiveSubscription] = useState(0)

  return (
      <PosedModal pose={`${modal ? "visible" : "invisible"}`} style={{display: `${modal ? 'flex' : 'none'}`}} className="modal">
        <div style={{position: 'fixed', width: '100vw', height: '10vh', top: '0', left: '0', background: 'rgba(0,0,0,0.5)'}} onClick={() => setModal(false)}></div>
        <div style={{position: 'fixed', width: '100vw', height: '10vh', bottom: '0', left: '0', background: 'rgba(0,0,0,0.5)'}} onClick={() => setModal(false)}></div>
        <div style={{position: 'fixed', width: '10vw', height: '80vh', top: '10vh', left: '0', background: 'rgba(0,0,0,0.5)'}} onClick={() => setModal(false)}></div>
        <div style={{position: 'fixed', width: '10vw', height: '80vh', top: '10vh', right: '0', background: 'rgba(0,0,0,0.5)'}} onClick={() => setModal(false)}></div>
        <div className="item-title-container">
          {content.map((el, i) => {
            return <p style={{marginTop: '2em'}} onClick={() => setActiveSubscription(i)}>{el.title}</p>
          })}
        </div>
        <div className="item-content-container">
          {content[activeSubscription].content}
        </div>
        <div className="item-photo-container">

        </div>
      </PosedModal>
  )
}

export default Modal

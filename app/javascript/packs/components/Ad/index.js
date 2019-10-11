import React, {useEffect, useState} from 'react'
import Map from './map.png'

import posed from 'react-pose'

import Modal from '../Modal'
import './styles.css'

const PosedContent = posed.div({
  left: {
    opacity: '0',
    x: '-10%',
  },
  visible: {
    opacity: '1',
    x: '0',
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 300,
      delay: 0
    }
  },
  right: {
    opacity: '0',
    x: '10%',
  }
})

const PosedImage = posed.div({
  left: {
    opacity: '0',
    x: '-10%',
  },
  visible: {
    opacity: '1',
    x: '0',
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 300,
      delay: 100
    }
  },
  right: {
    opacity: '0',
    x: '10%',
  }
})

const Ad = (props) => {
  const [modal, setModal] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.currentScroll === props.order) {
      setLoaded(true)
    }
  })

  return (
    <div className="container" style={{flexFlow: `${((props.order + 1) % 2 === 0) ? "row-reverse nowrap" : "row nowrap"}`}} ref={props.componentRef.ref}>
      <PosedContent pose={loaded ? "visible" : `${((props.order + 1) % 2 === 0) ? "right" : "left"}`} className="container-text">
        <h2 className="container-text-title" onClick={() => setModal(!modal)}>About Us</h2>
        <p className="container-text-explanation">様々な種類のおやつを、食べきりサイズ(20-40g)でお届けします。マイページでリクエストや評価をするほど自分好みに。嫌いな食べ物を登録するとお届けしません季節によって取扱スナックが変わります</p>
      </PosedContent>
      <PosedImage pose={loaded ? "visible" : `${((props.order + 1) % 2 === 0) ? "left" : "right"}`} className="container-photo">
        <img src={Map} alt="map" className="map" />
      </PosedImage>
      <Modal modal={modal} title={props.componentRef.title} setModal={setModal} />
    </div>
  )
}

export default Ad

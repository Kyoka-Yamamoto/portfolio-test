import React, { useReducer, useEffect, useState } from 'react'
import './styles.css'

import posed from 'react-pose'

import { backgrounds } from '../../assets/Images'

const reducer = (state, action) => {
    switch (action.type) {
        case 'setPosition':
            return {...state, position: action.value, previous: state.position}
        case 'setIsPlaying':
            return {...state, isPlaying: action.value}
        default:
            return state
    }
}

const initialState = {
    position: 1,
    previous: 3,
    isPlaying: true,
}


const PosedCarousel = posed.img({
  inactive: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0
    }
  },
  active: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1000
    }
  }
})

const LandingCarousel = ({ activeImage, setActiveImage }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [scroll, setScroll] = useState(window.scrollY / 6)

  const handleScroll = () => {
    const currentScrollY = window.scrollY / 6
    setScroll(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false })
    return window.addEventListener('scroll', handleScroll, { passive: false })
  })

  useEffect(() => {
    if (state.isPlaying) {
        const timeout = setTimeout(() => {
            state.position === 3
                ? dispatch({type: 'setPosition', value: 1})
                : dispatch({type: 'setPosition', value: (state.position + 1)})
        }, 5000);
        return () => clearTimeout(timeout)
    }
  }, [state.isPlaying, state.position])


  return (
      <div style={{top: -scroll}} className="landing-carousel">
        <img className="carousel-image-bg" src={backgrounds[0]} alt="carousel" />
      </div>
  )
}

export default LandingCarousel

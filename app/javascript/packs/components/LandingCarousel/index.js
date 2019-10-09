import React, { useReducer, useEffect } from 'react'
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
      <div className="landing-carousel" onClick={() => dispatch({type: "setIsPlaying", value: !state.isPlaying})}>
        <img className="carousel-image-bg" src={backgrounds[state.previous - 1]} alt="carousel" />
        {backgrounds.map((el, i) => {
          return <PosedCarousel pose={(i + 1 === state.position) ? "active" : "inactive"} className="carousel-image" src={el} alt="carousel" />
        })}
      </div>
  )
}

export default LandingCarousel

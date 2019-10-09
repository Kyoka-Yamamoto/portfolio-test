import React, { useRef, useState, useEffect } from 'react'

import './styles.css'

import Ad from '../Ad'

const LazyLoadContainer = (props) => {

  const [scroll, setScroll] = useState(0)

  const items = [
    "recommendations",
    "number 2",
    "number 3",
    "number 4"
  ]

  const componentRefs = items.map(el => {
    return {
      title: el,
      ref: useRef(null)
    }
  })

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    const active = componentRefs.map(el => {
      const offsetBot = (el.ref.current.offsetTop + el.ref.current.offsetHeight)
      if (currentScrollY >= el.ref.current.offsetTop && currentScrollY < offsetBot) {
        return true
      }
      else {
        return false
      }
    })

    active.forEach((el, i) => {
      if (el) {
        setScroll(i)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false })
    return window.addEventListener('scroll', handleScroll, { passive: false })
  })

  return(
    <div className="lazyload-container" onClick={() => console.log(event)}>
      {componentRefs.map((el, i) => {
        return <Ad currentScroll={scroll} order={i} componentRef={el}/>
      })
      }
    </div>
  )
}

export default LazyLoadContainer

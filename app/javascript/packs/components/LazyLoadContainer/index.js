import React, { useRef, useState, useEffect } from 'react'

import './styles.css'

const LazyLoadContainer = (props) => {

  const [scroll, setScroll] = useState(0)

  const componentRefs = [
    { title: 'start', ref: useRef(null) },
    { title: 'yellow', ref: useRef(null) },
    { title: 'purple', ref: useRef(null) },
    { title: 'green', ref: useRef(null) },
  ]

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (componentRefs[0].ref.current.offsetTop) {
      if (currentScrollY >= componentRefs[0].ref.current.offsetTop && currentScrollY < componentRefs[1].ref.current.offsetTop) {
        setScroll(1)
      } else if (currentScrollY >= componentRefs[1].ref.current.offsetTop && currentScrollY < componentRefs[2].ref.current.offsetTop) {
        console.log(componentRefs[1].title)
      } else if (currentScrollY >= componentRefs[2].ref.current.offsetTop && currentScrollY < componentRefs[3].ref.current.offsetTop) {
        console.log(componentRefs[2].title)
      } else if (currentScrollY >= componentRefs[3].ref.current.offsetTop) {
        console.log(componentRefs[3].title)
      }
      else {
        setScroll(0)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false })
    return window.addEventListener('scroll', handleScroll, { passive: false })
  })

  return(
    <div className="lazyload-container" ref={componentRefs[0].ref} onClick={() => console.log(event)}>
      {["yellow", "purple", "green"].map((el, i) => {
        return <div className="ad" ref={componentRefs[i + 1].ref} style={{background: el}}></div>
      })
      }
    </div>
  )
}

export default LazyLoadContainer

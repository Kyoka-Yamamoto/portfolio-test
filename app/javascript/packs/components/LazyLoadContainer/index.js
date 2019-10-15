import React, { useRef, useState, useEffect } from 'react'

import './styles.css'

import Ad from '../Ad'

import { homePage } from '../../assets/content/index.js'

const LazyLoadContainer = (props) => {

  const [scroll, setScroll] = useState(-1)

  const componentRefs = homePage.map(el => {
    return {
      title: el.title,
      content: el.content,
      modal: el.modal,
      ref: useRef(null)
    }
  })

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    const active = componentRefs.map((el, i) => {
      const offsetTop = el.ref.current.offsetTop
      const offsetBot = el.ref.current.offsetTop + el.ref.current.offsetHeight
      const breakValue = el.ref.current.offsetHeight * 1

      const breakpointTop = (offsetTop - breakValue)
      const breakpointBot = (offsetBot - breakValue)

      if (currentScrollY >= breakpointTop && currentScrollY < breakpointBot) {
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

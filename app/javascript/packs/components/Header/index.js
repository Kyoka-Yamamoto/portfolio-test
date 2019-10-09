import React, { useState, useEffect } from 'react'
import './styles.css'

import posed from 'react-pose'

const PosedHeader = posed.div({
  invisible: {
    y: '-100%',
    transition: {
      delay: 0,
      duration: 200
    }
  },
  fixed: {
    y: '0',
    transition: {
      delay: 0,
      duration: 200
    }
  }
})

const Header = (props) => {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY >= 200) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false })
    return window.addEventListener("scroll", handleScroll)
  })

  return (
    <React.Fragment>
      <div className="header"></div>
      <PosedHeader className="header-fixed" pose={scroll ? "fixed" : "invisible"}></PosedHeader>
    </React.Fragment>
  )
}

export default Header

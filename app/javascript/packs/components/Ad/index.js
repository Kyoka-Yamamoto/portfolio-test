import React, {useEffect} from 'react'

const Ad = (props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(props.componentRef)
    }, 5000)
  })

  return (
    <div className="ad" ref={props.componentRef} style={{background: props.el}}></div>
  )
}

export default Ad

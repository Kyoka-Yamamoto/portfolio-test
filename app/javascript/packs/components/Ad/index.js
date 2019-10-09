import React, {useEffect} from 'react'

const Ad = (props) => {
  return (
    <div className="ad" ref={props.componentRef.ref} style={{background: `${props.currentScroll === props.order ? "purple" : "green"}`}}>
      <h1>{props.componentRef.title}</h1>
    </div>
  )
}

export default Ad

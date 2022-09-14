
import React, { useState } from 'react'
import './Demo.css'

function Demo(props) {



  return (
    <div>
<h1 style={{color: "red"}}> This is demo  </h1>
<button onClick={props.name} className='button'> Call Data Function</button>
<image source='./nature.jpg'  />
    </div>
  )
}

export default Demo
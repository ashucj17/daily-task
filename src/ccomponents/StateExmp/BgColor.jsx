import React, { useState } from 'react'

const BgColor = () => {
   const [change, setChange] =  useState()

 const bgChange = () =>{}
  return (<>
    <div style={{background:'orange', width: "200px", height: '200px'}}>{}</div>
    <button onClick={bgChange()} >Red</button>
    <button onClick={bgChange()}>Blue</button>
    <button onClick={bgChange()}>Green</button>
  </>
  )
}

export default BgColor
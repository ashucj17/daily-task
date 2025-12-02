import React, { useState } from 'react'

const ShowHide = () => {
    const[show, setShow] = useState(true)
    const handleVisibility = () =>setShow(!show)
  return (
    <>
        {show && (<p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro, praesentium ea numquam maxime voluptatum!</p>)}
        <button onClick={handleVisibility}>{show ? "Hide" : "Show" }</button>
    </>
  )
}

export default ShowHide
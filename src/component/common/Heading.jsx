import React from 'react'

function Heading({title,subtitle}) {
  return (
    <>
     <div id="heading">
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div> 
    </>
  )
}

export default Heading

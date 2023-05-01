import React from 'react'

const Box = ({icon,title, desc}) => {
  return (
    <div className='box'>
        <i className={icon} ></i>
        <div class="desc">
        <h2> {title} </h2>
        <p> {desc} </p>
        </div>   
    </div>
  )
}

export default Box

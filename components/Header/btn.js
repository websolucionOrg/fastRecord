import React from 'react'
import { FaBars} from 'react-icons/fa'

function handleClick() {
   document.querySelector(".navbar").classList.toggle("active")
  }

const Btn = () => {
  return (
        <FaBars onClick={handleClick} className='btn-menu' />
  )
}

export default Btn

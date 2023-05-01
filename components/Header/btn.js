import React from 'react'
import { FaBars} from 'react-icons/fa'


const BtnMenu = ({ onClick }) => {

  return (
        <FaBars onClick={onClick} className='btn-menu' />
  )
}

export default BtnMenu

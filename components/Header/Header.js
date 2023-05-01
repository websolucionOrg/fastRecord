import React from 'react'
import Link from 'next/link'
import  { BsDisc } from 'react-icons/bs'
import BtnMenu from './btn'
import useToggle from '../evennts/useToggle'


const Header = () => {

  const [toggle, handleClick] = useToggle();


  return (
    <header className='header'>
        <nav className='container'>
            <Link href="/" passHref id='logo' > <BsDisc /> <span>FestRecord</span> </Link>
               <ul className={`navbar ${toggle ? 'active' : 'desactive'}`}>
                 <li><Link href="/" passHref > Home </Link></li>
                 <li><Link href="/artists" passHref > Artistas </Link></li>
                 <li><Link href="/" passHref > Musicas </Link></li>
               </ul>
            <BtnMenu className='btn-menu' onClick={handleClick} />  
        </nav>
    </header>
  )
}

export default Header

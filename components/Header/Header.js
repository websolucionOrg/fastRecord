import React from 'react'
import Link from 'next/link'
import  { BsDisc } from 'react-icons/bs'
import Btn from './btn'



const Header = () => {
  return (
    <header className='header'>
        <nav className='container'>
            <Link href="/" passHref id='logo' > <BsDisc /> <span>FestRecord</span> </Link>
       
               <ul className='navbar'>
                 <li><Link href="/" passHref > Home </Link></li>
                 <li><Link href="/artists" passHref > Artistas </Link></li>
                 <li><Link href="/" passHref > Musicas </Link></li>
               </ul>
            <Btn />  
        </nav>

    </header>
  )
}

export default Header

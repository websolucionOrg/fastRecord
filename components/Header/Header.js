import React from 'react'
import Link from 'next/link'
import  { BsDisc } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <Link href="/" passHref id='logo' > <BsDisc /> <span>FestRecord</span> </Link>
            <nav>
               <ul>
                 <li><Link href="/" passHref > Home </Link></li>
                 <li><Link href="/" passHref > Artistas </Link></li>
                 <li><Link href="/" passHref > Musicas </Link></li>
               </ul>
            </nav>          
        </div>

    </header>
  )
}

export default Header

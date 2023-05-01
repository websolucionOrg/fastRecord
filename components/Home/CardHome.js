import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CardHome = ({title,desc, page,image, alt}) => {
  return (
    <div className='cardHome'>
        <div className='image'>
            <Image src={image} width={400} height={400} alt={alt} />
        </div>
        <div className='content'>
            <h2> {title} </h2>
            <p> {desc} </p>
            <Link href={page} className='btn' >Ver Mais</Link>
        </div>
    </div>
  )
}

export default CardHome

import React from 'react'
import CardHome from './CardHome'
import Box from './box'
const HomePage = () => {
  return (
    <>
       <section className='start'>
         <div className='content one'>
          <h1>Tudo pela</h1>
          <p>Evolução da arte musical
            e o interterimento Angolano
          </p>
         </div>

         <div className='content two'>
          <h1>Os melhores</h1>
          <p>Artistas num só lugar,
            para alegria do povo 
          </p>
         </div>

       </section>

       <section className='services'>
            <div className='container' >
                <Box icon={"bi-disc"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
                <Box icon={"bi-boombox"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
                <Box icon={"bi-music-note-beamed"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
                <Box icon={"bi-mic-fill"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
                <Box icon={"bi-headset"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
                <Box icon={"bi-person-check-fill"} title={"Musica ao vivo"} desc={"Lorem ipsum dolor sit amet."} />
            </div>
       </section>

       <section className='descriptionsHome'>
            <div className='container'>
                <CardHome image="/img/ilust-5.jpg" page={"/"} alt={"corte"} desc="Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque,  maiores omnis. Eius molestias illo debitis deleniti ullam repellat quidem hic.ffdf" title={"Lorem ipsum dolor si"} />
                <CardHome image="/img/ilust-3.jpg" page={"/"} alt={"corte"} desc="Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque,  maiores omnis. Eius molestias illo debitis deleniti ullam repellat quidem hic.ffdf" title={"Lorem ipsum dolor si"} />
                <CardHome image="/img/ilust-1.jpg" page={"/"} alt={"corte"} desc="Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque,  maiores omnis. Eius molestias illo debitis deleniti ullam repellat quidem hic.ffdf" title={"Lorem ipsum dolor si"} />
            </div>
       </section>
    </>
  )
}

export default HomePage

import React, { useState } from 'react';
import TamboDeManteca from './components/TamboDEManteca';
import WhenEresElCristian from './components/WhenEresElCristian';
import GOTYOFTHEYEAR from './components/GOTYOFTHEYEAR';
import CUM from './components/CUM';
import Miniaturas from './components/miniaturas';
import Tarjetas from './components/tarjetas';



const COMPONENTES = [<></>, <WhenEresElCristian />, <TamboDeManteca/>, <GOTYOFTHEYEAR />]

function App() {
  const [seleccion, setSeleccion] = useState(0)

  

  return (
    <>
      <nav className='pantalla'>
        {/* Menu */}
        <div className='mini1'>
          {/* Miniatura Cristian */}
          <Miniaturas imagen="https://rotoplas.kaerdos.dev/files/3667683352.jpg" cambio={_ => setSeleccion(1)}/>
          {/* Botón correspondiente a la miniatura */}
        </div>

        <Miniaturas imagen='https://rotoplas.kaerdos.dev/files/3889608337.png' cambio={_ => setSeleccion(2)} />

        <div className='mini3'>
          {/* Miniatura Juego */}
          <Miniaturas imagen="https://rotoplas.kaerdos.dev/files/3336901469.png" cambio={_ => setSeleccion(3)}/>
          {/* Botón correspondiente a la miniatura */}
        </div>

          {/* Tarjeta Cristian */}
          <Tarjetas photo='https://rotoplas.kaerdos.dev/files/1905207738.png' content='Montones de texto por montones para hacer buya y que el proyecto quede bien chido, por que sino nos vamos a extra y el saul no va a la playa epicamente' cambio={_ => setSeleccion(1)}/>
          {/* Botón correspondiente a la tarjeta */}


          {/* Tarjeta Juego */}
          <Tarjetas photo='https://rotoplas.kaerdos.dev/files/1905207738.png' content='Montones de texto por montones para hacer buya y que el proyecto quede bien chido, por que sino nos vamos a extra y el saul no va a la playa epicamente 2.0' cambio={_ => setSeleccion(3)}/>
          {/* Botón correspondiente a la tarjeta */}
      </nav >

      {COMPONENTES[seleccion]}
    </>
  );
}

export default App;
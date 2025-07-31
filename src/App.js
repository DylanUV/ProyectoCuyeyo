import React from 'react';
import TamboDeManteca from './components/TamboDEManteca';
import WhenEresElCristian from './components/WhenEresElCristian';
import GOTYOFTHEYEAR from './components/GOTYOFTHEYEAR';
import CUM from './components/CUM';

function App() {
  return (
    <>
      <nav className='pantalla'>
        {/* Menu */}
        <div className='mini1'>
          {/* Miniatura Cristian */}
          <img src='https://rotoplas.kaerdos.dev/files/3667683352.jpg' />
          <button onClick=''></button>
          {/* Botón correspondiente a la miniatura */}
        </div>

        <div className='mini2'>
          {/* Miniatura APIRotoplas */}
          <img src='https://rotoplas.kaerdos.dev/rotoplas.png' />
          <button onClick={e => CUM()}>Dale play</button>
          {/* Botón correspondiente a la miniatura */}
        </div>

        <div className='mini3'>
          {/* Miniatura Juego */}
          <img src='https://rotoplas.kaerdos.dev/files/3336901469.png' />
          <button></button>
          {/* Botón correspondiente a la miniatura */}
        </div>

        <div className='tarjeta1'>
          {/* Tarjeta Cristian */}
          <img src='https://rotoplas.kaerdos.dev/files/3410040.jpg' />
          <p> Montones de texto por montones para hacer buya y que el proyecto quede bien chido, por que sino nos vamos a extra y el saul no va a la playa epicamente</p>
          <WhenEresElCristian />
          <button></button>
          {/* Botón correspondiente a la tarjeta */}
        </div>

        <div className='tarjeta2'>
          {/* Tarjeta APIRotoplas */}
          <img src='https://rotoplas.kaerdos.dev/files/3889608337.png' />
          <p> Montones de texto por montones para hacer buya y que el proyecto quede bien chido, por que sino nos vamos a extra y el saul no va a la playa epicamente</p>
          <button></button>
          {/* Botón correspondiente a la tarjeta */}
        </div>

        <div className='tarjeta3'>
          {/* Tarjeta Juego */}
          <img src='https://rotoplas.kaerdos.dev/files/1905207738.png' />
          <p> Montones de texto por montones para hacer buya y que el proyecto quede bien chido, por que sino nos vamos a extra y el saul no va a la playa epicamente</p>
          <button></button>
          {/* Botón correspondiente a la tarjeta */}
        </div>
      </nav >

      <main className='fondo'>
        {/* Fondo (actividad) */}
        <div>
          {/* Activididad Cristian/Rotoplas */}
          <TamboDeManteca />
        </div>
      </main>
      
    </>
  );
}

export default App;
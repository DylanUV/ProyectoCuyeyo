import React, { useState } from 'react';
import TamboDeManteca from './components/TamboDEManteca';
import WhenEresElCristian from './components/WhenEresElCristian';
import GOTYOFTHEYEAR from './components/GOTYOFTHEYEAR';
import CUM from './components/CUM';
import Miniaturas from './components/miniaturas';
import Tarjetas from './components/tarjetas';

const COMPONENTES = [<></>, <WhenEresElCristian />, <TamboDeManteca />, <GOTYOFTHEYEAR />]

function App() {
  const [seleccion, setSeleccion] = useState(0)

  return (
    <div className='container'style={{ '--nav-width': seleccion == 0 ? '100%' : '200px', '--nav-bg': seleccion == 0 ? 'none' : 'rgba(255,255,255,0.3)', '--mini-display': seleccion ? 'inline-flex' : 'none', '--card-display': seleccion ? 'none' : 'block' }} >
      <nav onClick={e => { e.preventDefault(); setSeleccion(0) }}>
        <div className='mini-container' >
          <Miniaturas imagen="https://rotoplas.kaerdos.dev/files/3667683352.jpg" cambio={e => { e.stopPropagation(); setSeleccion(1) }} />
          <Miniaturas imagen='https://rotoplas.kaerdos.dev/files/2566362373.jpeg' cambio={e => { e.stopPropagation(); setSeleccion(2) }} />
          <Miniaturas imagen="https://rotoplas.kaerdos.dev/files/3336901469.png" cambio={e => { e.stopPropagation(); setSeleccion(3) }} />
        </div>

        <Tarjetas photo='https://rotoplas.kaerdos.dev/files/3410040.jpg' content='When resuelves ecuaciones diferenciales' cambio={_ => { _.stopPropagation(); setSeleccion(1) }} />
        <Tarjetas photo='https://rotoplas.kaerdos.dev/files/3889608337.png' content='When conectas una API' cambio={_ => { _.stopPropagation(); setSeleccion(2) }} />
        <Tarjetas photo='https://rotoplas.kaerdos.dev/files/1905207738.png' content='When usas Unity' cambio={_ => { _.stopPropagation(); setSeleccion(3) }} />
      </nav >

      <main>

        {COMPONENTES[seleccion]}
      </main>
    </div>
  );
}

export default App;
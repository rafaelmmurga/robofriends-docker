import Head from 'next/head'
import { useState, useEffect } from 'react'
import 'tachyons';

import CardList from '../app/Presentation/components/CardList';
import SearchBox from '../app/Presentation/components/SearchBox';
import Scroll from '../app/Presentation/components/Scroll';

export default function Home() {

  const [robots, setRobots] = useState([])
  const [cuadrobuscar, setCuadrobuscar] = useState("")

  const robotFiltrado = robots.filter(robot => {
    return robot.name.toLowerCase().includes(cuadrobuscar.toLowerCase())
  });

  const enBuscarCambio = (evento) => {
    setCuadrobuscar(evento.target.value)
  }

  useEffect(() => {
    fetch('https://rafaelmmurga.github.io/datos/users.json')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])

  return (
    <div className='pa2 ma2'>
      <Head>
        <title>RoboFriends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='tc pa2 ma2'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={enBuscarCambio} />
          <Scroll>
            {!robots.length
              ? <h1>Cargando</h1>
              : <CardList robots={robotFiltrado} />
            }
          </Scroll>
        </div>
      </main>

    </div>
  )
}

import { useEffect, useState } from 'react'
import './App.css'
import Summon from './components/Summon'
import type Particle from './components/scripts/Particle';
import QuadTree from './components/scripts/QuadTree';

export default function App() {
  const mapSize: number = 500;
  const qt: QuadTree = new QuadTree(mapSize)

  return (
    <>
      <div className='world' >
        <div className='verse'>
          <svg width={mapSize} height={mapSize}>
            <g fill="grey" stroke="" stroke-width="5">
              <circle cx="500" cy="0" r="10" />
              <circle cx="0" cy="500" r="10" />
            </g>
          </svg>
        </div>
        <Summon size={mapSize} qt={qt}/>
      </div>
    </>
  )
}



import { useState } from 'react'
import './App.css'
import Summon from './components/Summon'
import type Particle from './components/scripts/Particle';

export default function App() {

  const [particles, setParticles] = useState<Particle[]>([]);

  return (
    <>
      <div className='world' >
        <div className='verse'>
          <svg width={500} height={500}>
            <g fill="grey" stroke="" stroke-width="5">
              <circle cx="500" cy="0" r="10" />
              <circle cx="0" cy="500" r="10" />
            </g>
          </svg>
        </div>
        <Summon size={500} setParticles={setParticles} />
      </div>
    </>
  )
}



import { useEffect, useState } from 'react'
import './App.css'
import Summon from './components/Summon'
import Particle from './components/scripts/Particle';
import QuadTree from './components/scripts/QuadTree';
import type QuadNode from './components/scripts/QuadNode';

export default function App() {
  const mapSize: number = 500;
  const qt: QuadTree = new QuadTree(mapSize)
  const [particles, setParticles] = useState<Particle[]>([]);
  const [quads, setQuads] = useState<QuadNode[]>([]);

  return (
    <>
      <div className='world' >
        <div className='verse'>
          <svg width={mapSize} height={mapSize}>
            <g fill="grey" stroke="" stroke-width="5">
              {particles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="5" />
              ))}
            </g>
            <g fill="transparent" stroke="red" stroke-width="2">
              {quads.map((q, i) => (
                <rect cx={q.x} cy={q.y} width={q.size} height={q.size} />
              ))}
            </g>
          </svg>
        </div>
        <Summon size={mapSize} setParticles={setParticles} setQuads={setQuads} qt={qt}/>
      </div>
    </>
  )
}



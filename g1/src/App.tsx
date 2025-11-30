import { useEffect, useState } from 'react'
import './App.css'
import Summon from './components/Summon'
import Particle from './components/scripts/Particle';
import QuadTree from './components/scripts/QuadTree';

export default function App() {
  const mapSize: number = 500;
  const qt: QuadTree = new QuadTree(mapSize)
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    for(const p of particles) {
      console.log(p.x, p.y);
    }
  }, [particles])

  return (
    <>
      <div className='world' >
        <div className='verse'>
          <svg width={mapSize} height={mapSize}>
            <g fill="grey" stroke="" stroke-width="5">
              {particles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="8" />
              ))}
            </g>
          </svg>
        </div>
        <Summon size={mapSize} setParticles={setParticles} qt={qt}/>
      </div>
    </>
  )
}



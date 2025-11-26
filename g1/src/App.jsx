import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
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
        <button style={{marginTop: "10px"}}>Yes</button>
      </div>
    </>
  )
}



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <div className='world' >
        <div className='verse'>
          <svg>
            <g fill="grey" stroke="" stroke-width="5">
              <circle cx="40" cy="40" r="25" />
              <circle cx="60" cy="60" r="25" />
            </g>
          </svg>
        </div>
        <button style={{marginTop: "10px"}}>Yes</button>
      </div>
    </>
  )
}



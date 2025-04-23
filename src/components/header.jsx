import React from 'react'
import '../styles/header.css'

function header() {
  return (
    <div className='head-container'>
        <div className='head-content'>
            <h1 className='head-title'>Test Header</h1>
            <p className='head-subtitle'>Let's learn react</p>
        </div>
    </div>
  )
}

export default header
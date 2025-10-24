import React from 'react'
import './Loader.css'

export default function Loader(){
  return (
    <div className="loader-wrap">
      <div className="loader">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="loader-text">Cargando...</div>
    </div>
  )
}

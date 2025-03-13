import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/SecondsCounter.jsx'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home' //não precisa colocar o index.jsx porque ele já atribui sozinho
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

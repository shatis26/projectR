import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Your from './Yourname.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Your />
  </>
)

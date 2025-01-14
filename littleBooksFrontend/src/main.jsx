import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header'
import StatiContent from './components/statiContent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <StatiContent />
  </StrictMode>
)

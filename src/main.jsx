import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthContextProvider>
)

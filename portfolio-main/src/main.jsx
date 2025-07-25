import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from './components/ui/toaster' // ✅ Update path if needed
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Toaster /> {/* ✅ Mount toaster globally */}
    </>
  </StrictMode>,
)

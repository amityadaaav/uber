import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Provider from './Context/Provider.jsx'
import CaptainProvider from './Context/CaptainContext/CaptainProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainProvider>
    <Provider>
      <App />
    </Provider>
    </CaptainProvider>
  </StrictMode>,
)

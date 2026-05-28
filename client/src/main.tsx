import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {GameScene} from './GameScene'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameScene />
  </StrictMode>,
)

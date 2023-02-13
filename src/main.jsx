import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {DragDrop} from './Drag';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DragDrop />
  </React.StrictMode>,
)

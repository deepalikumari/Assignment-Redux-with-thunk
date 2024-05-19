import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { fetchStore } from './comp/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {fetchStore}>

    <App />
    
  </Provider>
)
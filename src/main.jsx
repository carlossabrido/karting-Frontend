import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { render } from "react-dom";
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './app/store.js'
import persistStore from 'redux-persist/es/persistStore'

const persistor= persistStore(store)

render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

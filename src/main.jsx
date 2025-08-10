import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {compose, applyMiddleware} from 'redux'
import { configureStore, Tuple } from '@reduxjs/toolkit'
import { rootReducer } from './redux/rootReducer.js'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer, 
  middleware: () => new Tuple(thunk)
});

// Provider как в контексте - для доступа всем дочерним компонентам к store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

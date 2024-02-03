import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import rootReducer from './redux/reducers/root'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

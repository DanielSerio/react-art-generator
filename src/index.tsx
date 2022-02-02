import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { AppProvider } from './context'

const root: HTMLElement = (document.getElementById('root') || document.body)

render(
  <AppProvider>
    <App />
  </AppProvider>,
root)

import React from 'react'
import Aside from './layout/Aside'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Header from './layout/Header'

/**
 * Main Component.
 * @returns {ReactElement} App Component
 */
export default function App () {
  return (
    <div className="app">
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  )
}

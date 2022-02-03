import React from 'react'
import Canvas from '../Canvas'

/**
 * Main Content Component.
 * @returns {ReactElement} Content Component
 */
export default function Content () {
  return (
    <main className="content">
      <section className="container content-container">
        <Canvas />
      </section>
    </main>
  )
}

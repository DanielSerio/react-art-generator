import React, { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { AppContext } from '../../context'
import Canvas from '../Canvas'

/**
 * Main Content Component.
 * @returns {ReactElement} Content Component
 */
export default function Content () {
  const { renderParams } = useContext(AppContext)
  return (
    <main className="content">
      <section className="container content-container">
        <Scrollbars height={600} width={800}>
          {renderParams ? <Canvas /> : <p>Open the menu to the left to start generating!</p>}
        </Scrollbars>
      </section>
    </main>
  )
}

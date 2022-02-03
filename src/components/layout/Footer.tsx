import React, { useContext } from 'react'
import { AppContext } from '../../context'
import DownloadButton from '../buttons/DownloadButton'

/**
 * Main Footer Component.
 * @returns {ReactElement} Footer Component
 */
export default function Footer () {
  const { renderParams } = useContext(AppContext)

  return (
    <footer className="footer">
      <section className="container footer-container">Dan Serio</section>
      <DownloadButton disabled={renderParams === null}/>
    </footer>
  )
}

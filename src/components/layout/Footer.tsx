import React from 'react'
import DownloadButton from '../buttons/DownloadButton'

/**
 * Main Footer Component.
 * @returns {ReactElement} Footer Component
 */
export default function Footer () {
  return (
    <footer className="footer">
      <section className="container footer-container">Dan Serio</section>
      <DownloadButton disabled={true}/>
    </footer>
  )
}

import React from 'react'
import DarkmodeButton from '../buttons/DarkmodeButton'
import MenuButton from '../buttons/MenuButton'

export interface AsideProps {
  darkmode: boolean
  toggleDarkmode: () => void
  toggleMenuOpen: () => void
}

/**
 * Aside Component.
 * @param {AsideProps} - {@link AsideProps}
 * @returns {ReactElement} Aside Component
 */
export default function Aside ({ darkmode, toggleDarkmode, toggleMenuOpen }: AsideProps) {
  // TODO: add darkmode toggle
  return (
    <aside className="aside">
      <header className="aside-header">
        <MenuButton onClick={toggleMenuOpen} />
      </header>
      <section className="aside-container" >
        <DarkmodeButton darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
        <div className="form-container">

        </div>
      </section>
    </aside>
  )
}

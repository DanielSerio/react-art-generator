import React from 'react'

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
  return (
    <aside className="aside">
      <header className="aside-header" onClick={toggleMenuOpen}>menu</header>
      <section className="aside-container" >
        aside
      </section>
    </aside>
  )
}

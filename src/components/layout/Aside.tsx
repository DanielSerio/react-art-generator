import React, { useLayoutEffect, useRef, useState } from 'react'
import DarkmodeButton from '../buttons/DarkmodeButton'
import MenuButton from '../buttons/MenuButton'
import { Scrollbars } from 'react-custom-scrollbars'
import MainForm from '../forms/MainForm'

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
  const [height, setHeight] = useState(450)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setHeight(ref.current.clientHeight)
    }
  }, [ref])

  return (
    <aside className="aside">
      <header className="aside-header">
        <MenuButton onClick={toggleMenuOpen} />
      </header>
      <section className="aside-container" >
        <DarkmodeButton darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
        <div className="form-container" ref={ref}>
          <Scrollbars height={height}>
            <MainForm />
          </Scrollbars>
        </div>
      </section>
    </aside>
  )
}

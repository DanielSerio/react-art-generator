import React from 'react'
import { ImgSrcProvider } from '../context/ImgSrcContext'
import { useDarkmode, useSideMenu } from '../hooks'
import Aside from './layout/Aside'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Header from './layout/Header'

/**
 * Main Component.
 * @returns {ReactElement} App Component
 */
export default function App () {
  const { darkmode, toggleDarkmode } = useDarkmode()
  const { menuIsOpen, toggleMenuOpen } = useSideMenu()

  /**
   * Concats classNames with 'menu-open' state.
   * @returns {string} classNames
   */
  const classNames = (): string => `app ${menuIsOpen ? 'menu-open' : ''}`.trimEnd()

  return (
    <ImgSrcProvider>
      <div data-darkmode={darkmode} className={classNames()}>
        <Header />
        <Aside darkmode={darkmode} toggleDarkmode={toggleDarkmode} toggleMenuOpen={toggleMenuOpen} />
        <Content />
        <Footer />
      </div>
    </ImgSrcProvider>
  )
}

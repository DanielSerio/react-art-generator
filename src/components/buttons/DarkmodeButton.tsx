import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
export interface DarkmodeProps {
  darkmode: boolean
  toggleDarkmode: () => void
}

/**
 * Darkmode button component.
 * @param {DarkmodeProps}  - {@link DarkmodeProps}
 * @returns {ReactElement} Darkmode Button Component
 */
export default function DarkmodeButton ({ darkmode, toggleDarkmode }: DarkmodeProps) {
  return (
    <button className="btn btn-minimal btn-darkmode" onClick={toggleDarkmode}>
      <span>Darkmode</span>
      <span>
        {darkmode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </span>
    </button>
  )
}

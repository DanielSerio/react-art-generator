import { useCallback, useState } from 'react'

export interface UseDarkmode {
  darkmode: boolean
  toggleDarkmode: () => void
}

/**
 * Use darkmode hook.
 * @returns {UseDarkmode} {@link UseDarkmode}
 */
export function useDarkmode (): UseDarkmode {
  /**
   * Sets the value of the local storage item with the key `preferse-dark` to the value of the parameter
   * `value`.
   * @param {boolean} value - boolean
   * @returns {void} None
   */
  function setLSDarkmode (value: boolean): boolean {
    window.localStorage.setItem(KEY, JSON.stringify(value))
    return value
  }

  /**
   * Gets the value of the local storage item with the key `prefers-darke`. If the value is not found, it
   * sets the value to `false`.
   * @returns {boolean} Is darkmode.
   */
  function getLSDarkmode (): boolean {
    const value: string|null = window.localStorage.getItem(KEY)
    if (!value) return setLSDarkmode(false)
    return JSON.parse(value)
  }

  const KEY: string = 'prefers-dark'
  const [darkmode, setDarkmode] = useState<boolean>(getLSDarkmode())

  const toggleDarkmode = useCallback(() => {
    setDarkmode(!darkmode)
    setLSDarkmode(!darkmode)
  }, [setDarkmode, setLSDarkmode])

  return {
    darkmode,
    toggleDarkmode
  }
}

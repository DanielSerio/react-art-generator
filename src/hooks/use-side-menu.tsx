import { useCallback, useState } from 'react'

export interface UseSideMenu {
  menuIsOpen: boolean
  toggleMenuOpen: () => void
}

/**
 * Side menu state hook.
 * @returns {UseSideMenu} {@link UseSideMenu}
 */
export function useSideMenu (): UseSideMenu {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  /**
   * Toggles the menu open state.
   * @returns {void} None
   */
  const toggleMenuOpen = useCallback(() => {
    setMenuIsOpen(!menuIsOpen)
  }, [setMenuIsOpen])

  return {
    menuIsOpen,
    toggleMenuOpen
  }
}

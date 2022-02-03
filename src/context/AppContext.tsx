import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { ShapeGeneratorParams } from '../lib/Shape/types'

export interface AppContextParams {
  renderParams: null|ShapeGeneratorParams
  setRenderParams: Dispatch<SetStateAction<null|ShapeGeneratorParams>>
}

export const AppContext = createContext<AppContextParams>({
  renderParams: null,
  setRenderParams: () => {}
})

export interface AppProviderProps { children: ReactElement }

/**
 *
 * @param {ReactElement} children - The App component.
 * @returns {Provider<AppContextParams>} - The {@link AppContextParams} Provider
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  const [renderParams, setRenderParams] = useState<null|ShapeGeneratorParams>(null)

  return (
    <AppContext.Provider value={{ renderParams, setRenderParams }}>
      {children}
    </AppContext.Provider>
  )
}

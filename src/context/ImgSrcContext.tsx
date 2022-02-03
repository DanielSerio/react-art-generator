import React, { createContext, Dispatch, ReactElement, SetStateAction, useCallback, useState } from 'react'

export interface ImgSrcContextProps {
  src: string|null
  setSource: (value: string|null) => void
}

export const ImgSrcContext = createContext<ImgSrcContextProps>({
  src: null,
  setSource: () => {}
})

export interface ImgSrcProviderProps { children: ReactElement }

export const ImgSrcProvider = ({ children }: ImgSrcProviderProps) => {
  const [src, setSrc] = useState<null|string>(null)

  const setSource = useCallback((value: string|null) => {
    if (!value) setSrc(null)
    if (value) setSrc(`${value}`)
  }, [src, setSrc])
  return (
    <ImgSrcContext.Provider value={{ src, setSource }}>
      {children}
    </ImgSrcContext.Provider>
  )
}

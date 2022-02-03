import React, { useContext, useRef } from 'react'
import { AppContext } from '../context'
import { ImgSrcContext } from '../context/ImgSrcContext'
import { useRender } from '../hooks'

export default function Canvas () {
  const { renderParams } = useContext(AppContext)
  const ref = useRef<HTMLCanvasElement>(null)
  const { setSource } = useContext(ImgSrcContext)
  useRender(ref, renderParams, setSource)

  return <canvas ref={ref} height={renderParams?.dimensions[1] || 350} width={renderParams?.dimensions[0] || 500}/>
}

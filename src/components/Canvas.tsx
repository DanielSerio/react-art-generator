import React, { useContext, useRef } from 'react'
import { AppContext } from '../context'
import { useRender } from '../hooks'

export default function Canvas () {
  const { renderParams } = useContext(AppContext)
  const ref = useRef<HTMLCanvasElement>(null)

  useRender(ref, renderParams)

  return <canvas ref={ref} height={renderParams?.dimensions[1] || 350} width={renderParams?.dimensions[0] || 500}/>
}

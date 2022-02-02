import { RefObject, useEffect, useState } from 'react'
import { generateShapes } from '../lib/Shape'
import { ShapeGeneratorParams, ShapeProps } from '../lib/Shape/types'

export interface UseRender {
  isLoading: boolean
  renderError: string|null
}

/**
 * hook that generate shapes and renders them to the canvas. Returns loading and error state.
 * @param {RefObject<HTMLCanvasElement>} ref - A reference to the canvas element.
 * @param {ShapeGeneratorParams} params - {@link ShapeGeneratorParams}
 * @returns {UseRender} {@link UseRender}
 */
export function useRender (ref: RefObject<HTMLCanvasElement>, params: ShapeGeneratorParams): UseRender {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [renderError, setRenderError] = useState<null|string>(null)

  useEffect(() => {
    new Promise((resolve, reject) => {
      generateShapes(params, (shape: ShapeProps) => {
        // TODO: render
      })

      resolve(false)
    })
      .then(() => {
        setRenderError(null)
        setIsLoading(false)
      })
      .catch((e: Error) => {
        setIsLoading(false)
        setRenderError(e.message)
      })
  }, [params, ref])

  return {
    isLoading,
    renderError
  }
}

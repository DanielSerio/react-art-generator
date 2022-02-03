import { RefObject, useEffect, useState } from 'react'
import { getPoints } from '../lib/Point'
import { generateShapes } from '../lib/Shape'
import { ShapeGeneratorParams, ShapeProps } from '../lib/Shape/types'

export interface UseRender {
  isLoading: boolean
  renderError: string|null
}

function renderShape (ctx: CanvasRenderingContext2D, shape: ShapeProps): void {
  const { PI, random } = Math
  ctx.save()
  ctx.translate(...shape.position)
  ctx.rotate(PI * random())
  ctx.fillStyle = shape.color
  ctx.globalAlpha = 0.9
  const points = getPoints(shape.numPoints, ...shape.radius, shape.offset)
  ctx.beginPath()
  ctx.moveTo(...points[0])
  for (let i = 1; i < points.length; i += 1) ctx.lineTo(...points[i])
  ctx.lineTo(...points[0])
  ctx.fill()
  ctx.closePath()
  ctx.restore()
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
    new Promise((resolve) => {
      generateShapes(params, (shape: ShapeProps) => {
        if (ref && ref.current) renderShape(ref.current.getContext('2d') as CanvasRenderingContext2D, shape)
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

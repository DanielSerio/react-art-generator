import { RefObject, useEffect, useState } from 'react'
import { getPoints } from '../lib/Point'
import { generateShapes } from '../lib/Shape'
import { ShapeGeneratorParams, ShapeProps } from '../lib/Shape/types'

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
  ctx.filter = 'drop-shadow(0 0 8px #11111177)'
  ctx.globalCompositeOperation = 'color'
  ctx.fill()
  ctx.closePath()
  ctx.restore()
}

/**
 * hook that generate shapes and renders them to the canvas. Returns loading and error state.
 * @param {RefObject<HTMLCanvasElement>} ref - A reference to the canvas element.
 * @param {ShapeGeneratorParams} params - {@link ShapeGeneratorParams}
 * @returns {void} None
 */
export function useRender (ref: RefObject<HTMLCanvasElement>, params: ShapeGeneratorParams|null): void {
  useEffect(() => {
    if (ref && params) {
      const promise = new Promise((resolve) => {
        if (ref && ref.current) {
        const ctx = ref.current.getContext('2d') as CanvasRenderingContext2D
        const { width, height } = ctx.canvas
        ctx.clearRect(0, 0, width, height)
        generateShapes(params, (shape: ShapeProps) => renderShape(ctx, shape))
      }
        resolve(false)
      })
    }
  }, [params, ref])
}

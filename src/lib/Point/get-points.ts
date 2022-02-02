import { offsetPoint } from '.'
import { Point } from './types'

/**
 * Gets an array of points that form an ellipse.
 * @param {number} count - the number of points to generate
 * @param {number} xRadius - the radius of the ellipse in the x direction
 * @param {number} yRadius - the radius of the ellipse in the y direction
 * @returns {Point[]} An array of points.
 */
export function getPoints (count: number, xRadius: number, yRadius: number, offsetValue: number = 0): Point[] {
  const { PI, cos, sin } = Math
  const totalCircumference: number = PI * 2
  const angleIncrement: number = totalCircumference / count
  const points: Point[] = []

  for (let i = 0; i < totalCircumference; i += angleIncrement) {
    const x: number = cos(i) * xRadius
    const y: number = sin(i) * yRadius
    points.push(offsetPoint([x, y], offsetValue))
  }

  return points
}

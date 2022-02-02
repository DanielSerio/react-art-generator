import { randomValue } from '../random'
import { Point } from './types'

/**
 * Offset a point by a specified amount in a random direction.
 * @param {Point}  - [x, y]: Point - The point to offset.
 * @param {number} amount - The amount to offset the point by.
 * @returns {Point} An array of two coordinates.
 */
export function offsetPoint ([x, y]: Point, amount: number): Point {
  const xDir: number = randomValue(-1, 1)
  const yDir: number = randomValue(1, -1)

  return [
    x + (xDir * amount),
    y + (yDir * amount)
  ]
}

import { PointStore } from './Store'

/**
 * Generate a set of points in a two dimensional space
 * @param {number} count - The number of points to generate.
 * @param dimensions - [width, height]
 * @returns {PointStore} A PointStore object.
 */
export function generatePoints (count: number, dimensions: [number, number]): PointStore {
  return new PointStore(count, dimensions)
}

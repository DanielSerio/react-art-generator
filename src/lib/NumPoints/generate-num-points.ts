import { NumPointsStore } from './Store'

/**
 * Generate a random number of points between a minimum and maximum value
 * @param {number} count - the number of points to generate
 * @param {number} min - the minimum value of the range of random numbers
 * @param {number} max - The maximum number of points that can be generated.
 * @returns {NumPointsStore} A NumPointsStore object.
 */
export function generateNumPoints (count: number, min: number, max: number): NumPointsStore {
  return new NumPointsStore(count, min, max)
}

import { RadiusStore } from './Store'

/**
 * Generate a list of random radii between a min and max value.
 * @param {number} conut - The number of values to generate.
 * @param {number} min - The minimum radius value.
 * @param {number} max - The maximum radius of the circle.
 * @returns {RadiusStore} A RadiusStore object.
 */
export function generateRadii (count: number, min: number, max: number): RadiusStore {
  return new RadiusStore(min, max, count)
}

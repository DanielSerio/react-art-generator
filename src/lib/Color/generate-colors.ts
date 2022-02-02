import { ColorStore } from '.'

/**
 * Generate a list of colors from a list of colors and a number of colors to generate.
 * @param {string[]} colors - an array of colors to use for the palette.
 * @param {number} count - The number of colors to generate.
 * @returns {ColorStore} A ColorStore object.
 */
export function generateColors (colors: string[], count: number): ColorStore {
  return new ColorStore(colors, count)
}

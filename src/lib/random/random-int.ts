/**
 * Generate a random integer between two values.
 * @param {number} [minValue=0] - the minimum value of the random number
 * @param {number} [maxValue=1] - The maximum value of the random number.
 * @returns {number} A random integer between the min and max values.
 */
export function randomInt (minValue: number = 0, maxValue: number = 1): number {
  const { round, floor, ceil, random } = Math
  const max = floor(maxValue)
  const min = ceil(minValue)
  const diff = max - min

  return round(random() * diff) + min
}

/**
 * Generate a random value from a list of values
 * @param {any[]} values - The array of values to choose from.
 * @returns {any} A random value from the array of values passed in.
 */
export function randomValue<T=any> (...values: T[]): T {
  const { floor, random } = Math
  const args = [...values]
  const len: number = args.length
  const ri: number = floor(random() * len)
  return args[ri]
}

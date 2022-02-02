import { OffsetStore } from './Store'

/**
 * Generate a set of offsets for a given number of items and a maximum offset
 * @param {number} count - The number of offsets to generate.
 * @param {number} maxOffset - The maximum offset that can be generated.
 * @returns {OffsetStore} An OffsetStore object.
 */
export function generateOffsets (count: number, maxOffset: number): OffsetStore {
  return new OffsetStore(count, maxOffset)
}

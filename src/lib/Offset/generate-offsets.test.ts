import { generateOffsets } from '.'

describe('generateoffsets', () => {
  test('should generate the correct count of offsets', () => {
    const count: number = 500
    const timeKey: string = 'generateOffsets-test'
    console.time(timeKey)
    const store = generateOffsets(count, 48)
    expect(store.valueAt(count - 1)).toBeTruthy()
    console.timeEnd(timeKey)
  })
})

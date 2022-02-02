import { generateColors } from '.'

describe('generateColors', () => {
  test('should generate the correct number of colors', () => {
    const count: number = 500
    const timeKey: string = 'generateColors-test'
    console.time(timeKey)
    const store = generateColors(['cyan', 'yellow', 'magenta'], count)
    expect(store.valueAt(count - 1)).toBeTruthy()
    console.timeEnd(timeKey)
  })
})

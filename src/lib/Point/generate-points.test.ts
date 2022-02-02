import { generatePoints } from './generate-points'

describe('generatePoints', () => {
  test('should generate the correct number of points', () => {
    const count: number = 500
    const timeKey: string = 'generatePositions-test'
    console.time(timeKey)
    const store = generatePoints(count, [1000, 700])
    expect(store.valueAt(count - 1)).toBeTruthy()
    console.timeEnd(timeKey)
  })
})

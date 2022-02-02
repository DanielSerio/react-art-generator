import { generateNumPoints } from '.'

describe('generateNumPoints', () => {
  test('should generate the correct amount of numPoints', () => {
    const count: number = 500
    const timeKey: string = 'generateNumPoints-test'

    console.time(timeKey)
    const numPoints = generateNumPoints(count, 12, 60)
    expect(numPoints.valueAt(count - 1)).toBeTruthy()
    console.timeEnd(timeKey)
  })
})

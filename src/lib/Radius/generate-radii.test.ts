import { generateRadii } from '.'

describe('generateRadii', () => {
  test('should generate the correct amount of radii', () => {
    const count: number = 500
    const timeKey: string = 'generateRadii-test'

    console.time(timeKey)
    const radii = generateRadii(count, 12, 220)
    expect(radii.valueAt(count - 1)).toBeTruthy()
    console.timeEnd(timeKey)
  })
})

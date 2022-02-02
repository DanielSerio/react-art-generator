import { generateShapes } from '.'
import { getPoints } from '../Point'
import { ShapeGeneratorParams, ShapeProps } from './types'

describe('generateShapes', () => {
  test('should generate the shapes quickly', () => {
    const count: number = 5000
    const timeKey: string = 'generateShapes-test'

    const params: ShapeGeneratorParams = {
      dimensions: [1000, 700],
      maxOffset: 32,
      radius: [64, 254],
      numPoints: [5, 18],
      colors: ['cyan', 'yellow', 'magenta'],
      count
    }

    console.time(timeKey)
    generateShapes(params, (shape: ShapeProps) => {
      console.log(getPoints(shape.numPoints, ...shape.radius, shape.offset))
    })
    console.timeEnd(timeKey)
  })
})

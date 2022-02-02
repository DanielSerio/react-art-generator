import { randomInt } from '../random'
import { Store } from '../types'
import { Point } from './types'

export class PointStore implements Store<Point> {
  private _indicies!: Uint16Array
  private _values!: Point[]

  constructor (count: number, dimensions: [number, number]) {
    this.construct(count, dimensions)
  }

  private construct = (count: number, [width, height]: [number, number]): void => {
    const values: Point[] = []
    const indicies: number[] = []

    for (let i = 0; i < count; i += 1) {
      function findIndexOfPoint (point: Point) {
        return point[0] === x && point[1] === y
      }

      const x: number = randomInt(0, width)
      const y: number = randomInt(0, height)
      const indexOfPoint: number = values.findIndex(findIndexOfPoint)
      if (indexOfPoint < 0) {
        values.push([x, y])
        indicies.push(values.length - 1)
      } else {
        indicies.push(indexOfPoint)
      }
    }

    this._values = values
    this._indicies = new Uint16Array(indicies)
  }

  public valueAt = (index: number): Point => {
    if (index < 0 || index >= this._indicies.length) throw new Error(`PointStore.valueAt - Invalid index: ${index}`)
    const valueIndex: number = this._indicies[index]
    return this._values[valueIndex]
  }
}

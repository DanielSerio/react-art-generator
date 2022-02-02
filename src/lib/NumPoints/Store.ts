import { randomInt } from '../random'
import { Store } from '../types'

export class NumPointsStore implements Store<number> {
  private _indicies!: Uint16Array
  private _values: number[] = []

  constructor (count: number, min: number, max: number) {
    this.construct(count, min, max)
  }

  private construct = (count: number, min: number, max: number): void => {
    const indicies: number[] = []

    for (let i = 0; i < count; i += 1) {
      const value = randomInt(min, max)

      if (!this._values.includes(value)) {
        this._values.push(value)
        indicies.push(this._values.length - 1)
      } else {
        indicies.push(this._values.indexOf(value))
      }
    }

    this._indicies = new Uint16Array(indicies)
  }

  public valueAt = (index: number): number => {
    if (index < 0 || index >= this._indicies.length) throw new Error(`NumPointsStore.valueAt - Invalid index: ${index}`)
    const valueIndex: number = this._indicies[index]
    return this._values[valueIndex]
  }
}

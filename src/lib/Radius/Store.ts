import { randomInt } from '../random'

export class RadiusStore {
  private _values: number[] = []
  private _indicies!: Uint16Array

  constructor (min: number, max: number, count: number) {
    this.construct(min, max, count)
  }

  private construct = (min: number, max: number, count: number) => {
    const values: number[] = []
    const indicies: number[] = []

    for (let i = 0; i < count; i += 1) {
      const radius: number = randomInt(min, max)
      if (!values.includes(radius)) {
        values.push(radius)
        indicies.push(values.length - 1)
      } else {
        indicies.push(values.indexOf(radius))
      }
    }

    this._values = values
    this._indicies = new Uint16Array(indicies)
  }

  public valueAt = (index: number): number => {
    if (index < 0 || index >= this._indicies.length) throw new Error(`RadiusStore.valueAt - Invalid index: ${index}`)
    const valueIndex: number = this._indicies[index]
    return this._values[valueIndex]
  }
}

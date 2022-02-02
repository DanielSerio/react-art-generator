import { randomInt } from '../random'
import { Store } from '../types'

export class ColorStore implements Store<string> {
  private _indicies!: Uint16Array
  private _values: string[]

  constructor (colors: string[], count: number) {
    this._values = colors
    this.construct(count)
  }

  private construct = (count: number): void => {
    const indicies: number[] = []
    for (let i = 0; i < count; i += 1) indicies.push(randomInt(0, this._values.length - 1))
    this._indicies = new Uint16Array(indicies)
  }

  public valueAt = (index: number): string => {
    if (index < 0 || index >= this._indicies.length) throw new Error(`ColorStore.valueAt - Invalid index: ${index}`)
    const valueIndex: number = this._indicies[index]
    return this._values[valueIndex]
  }
}

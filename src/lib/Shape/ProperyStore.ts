import { ColorStore, generateColors } from '../Color'
import { generateNumPoints } from '../NumPoints'
import { NumPointsStore } from '../NumPoints/Store'
import { generateOffsets } from '../Offset'
import { OffsetStore } from '../Offset/Store'
import { generatePoints } from '../Point/generate-points'
import { PointStore } from '../Point/Store'
import { generateRadii } from '../Radius'
import { RadiusStore } from '../Radius/Store'
import { Store } from '../types'
import { ShapeGeneratorParams, ShapeProps } from './types'

export class PropertyStore implements Store<ShapeProps> {
  private _xRadiusStore: RadiusStore
  private _yRadiusStore: RadiusStore
  private _offsetStore: OffsetStore
  private _colorStore: ColorStore
  private _positionStore: PointStore
  private _numPointsStore: NumPointsStore
  private _length: number

  constructor (params: ShapeGeneratorParams) {
    this._length = params.count
    this._colorStore = generateColors(params.colors, params.count)
    this._offsetStore = generateOffsets(params.count, params.maxOffset)
    this._xRadiusStore = generateRadii(params.count, ...params.radius)
    this._yRadiusStore = generateRadii(params.count, ...params.radius)
    this._positionStore = generatePoints(params.count, params.dimensions)
    this._numPointsStore = generateNumPoints(params.count, ...params.numPoints)
  }

  public get length (): number { return this._length }

  public valueAt = (index: number): ShapeProps => {
    if (index < 0 || index >= this._length) throw new Error(`PropertyStore.valueAt - Invalid index: ${index}`)
    const position = this._positionStore.valueAt(index)
    const xRadius = this._xRadiusStore.valueAt(index)
    const yRadius = this._yRadiusStore.valueAt(index)
    const offset = this._offsetStore.valueAt(index)
    const color = this._colorStore.valueAt(index)
    const numPoints = this._numPointsStore.valueAt(index)

    return {
      position,
      radius: [xRadius, yRadius],
      offset,
      color,
      numPoints
    }
  }
}

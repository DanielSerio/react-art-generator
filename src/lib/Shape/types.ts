import { Point } from '../Point/types'

export interface ShapeProps {
  radius: [number, number]
  position: Point
  color: string
  offset: number
  numPoints: number
}

export interface ShapeGeneratorParams {
  colors: string[]
  dimensions: [number, number]
  count: number
  radius: [number, number] // [min, max]
  numPoints: [number, number] // [min, max]
  maxOffset: number
}

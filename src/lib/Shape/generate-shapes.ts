import { PropertyStore } from './ProperyStore'
import { ShapeGeneratorParams, ShapeProps } from './types'

export type GenerateShapeCallback = ((shape: ShapeProps) => void)

/**
 * Generate a bunch of shapes based on the parameters passed in.
 * Does not save the shapes to memory and instead executes a callback
 * on the shapes properties. This callback is intended to be used to render
 * shapes to a canvas.
 * @param {ShapeGeneratorParams} params - ShapeGeneratorParams
 * @param {GenerateShapeCallback} callback - A function that will be called for each shape.
 * @returns {void} None
 */
export function generateShapes (params: ShapeGeneratorParams, callback: (shape: ShapeProps) => void): void {
  const store = new PropertyStore(params)

  for (let i = 0; i < store.length; i += 1) {
    callback(store.valueAt(i))
  }
}

import React from 'react'
import { Controller, FieldError, useForm, ControllerRenderProps } from 'react-hook-form'
import FormControl, { FormControlProps } from './FormControl'
import RCSlider, { createSliderWithTooltip } from 'rc-slider'
import SwatchView from '../controls/SwatchView'
import { ChromePicker } from 'react-color'

export interface MainFormParams {
  height: number
  width: number
  count: number
  radius: [number, number]
  numPoints: [number, number]
  maxOffset: number
}

export type RequiredFieldParams = [keyof MainFormParams, { required: string }]

export default function MainForm () {
  const { register, handleSubmit, control, formState: { errors } } = useForm<MainFormParams>({
    mode: 'onBlur',
    defaultValues: {
      height: 500,
      width: 350,
      count: 250,
      radius: [96, 150],
      numPoints: [5, 16],
      maxOffset: 16
    }
  })
  const Slider = createSliderWithTooltip(RCSlider)
  const Range = createSliderWithTooltip(RCSlider.Range)

  const heightParams: RequiredFieldParams = ['height', { required: 'Height is required.' }]
  const widthParams: RequiredFieldParams = ['width', { required: 'Width is required.' }]

  const message = (name: keyof MainFormParams): string|undefined => {
    if (errors && errors[name]) {
      const err = errors[name] as FieldError
      return err.message
    }
  }

  return (
    <form className="form form-main">
      <fieldset>
        <legend>Dimensions</legend>
        <FormControl labelText='Height' inline error={message('height')}>
          <input type="number" className="input" {...register(...heightParams)} />
        </FormControl>
        <FormControl labelText='Width' inline error={message('width')}>
          <input type="number" className="input" {...register(...widthParams)} />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Properties</legend>
        <FormControl labelText='Shape Count'>
          <Controller name="count" control={control} render={
            ({ field: { onChange, value, ref } }: { field: ControllerRenderProps<MainFormParams, 'count'>}) => {
              return (
                <div className="slider-area">
                  <Slider ref={ref} min={64} max={600} value={value} onChange={onChange} />
                  <span className="slider-display">{value}</span>
                </div>
              )
            }
          }/>
        </FormControl>
        <FormControl labelText='Radius' labelHelper='(min/max)'>
          <Controller name="radius" control={control} render={
            ({ field: { onChange, value, ref } }: { field: ControllerRenderProps<MainFormParams, 'radius'>}) => {
              return (
                <div className="slider-area">
                  <Range ref={ref} min={16} max={250} value={value} onChange={onChange} />
                  <span className="slider-display">{value.toString()}</span>
                </div>
              )
            }
          }/>
        </FormControl>
        <FormControl labelText='Shape Points' labelHelper='(min/max)'>
          <Controller name="numPoints" control={control} render={
            ({ field: { onChange, value, ref } }: { field: ControllerRenderProps<MainFormParams, 'numPoints'>}) => {
              return (
                <div className="slider-area">
                  <Range ref={ref} min={3} max={32} value={value} onChange={onChange} />
                  <span className="slider-display">{value.toString()}</span>
                </div>
              )
            }
          }/>
        </FormControl>
        <FormControl labelText='Max Point Offset'>
          <Controller name="maxOffset" control={control} render={
            ({ field: { onChange, value, ref } }: { field: ControllerRenderProps<MainFormParams, 'maxOffset'>}) => {
              return (
                <div className="slider-area">
                  <Slider ref={ref} min={3} max={32} value={value} onChange={onChange} />
                  <span className="slider-display">{value.toString()}</span>
                </div>
              )
            }
          }/>
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Colors</legend>
        <ChromePicker className='color-picker picker'/>
        <SwatchView colors={['cyan', 'yellow', 'magenta']} removeColor={() => {}}/>
      </fieldset>
    </form>
  )
}

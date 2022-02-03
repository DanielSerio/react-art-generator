import React from 'react'
import { Controller, FieldError, useForm, ControllerRenderProps } from 'react-hook-form'
import FormControl, { FormControlProps } from './FormControl'
import RCSlider, { createSliderWithTooltip } from 'rc-slider'

export interface MainFormParams {
  height: number
  width: number
  count: number
}

export type RequiredFieldParams = [keyof MainFormParams, { required: string }]

export default function MainForm () {
  const { register, handleSubmit, control, formState: { errors } } = useForm<MainFormParams>({
    mode: 'onBlur',
    defaultValues: {
      height: 500,
      width: 350,
      count: 250
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
      </fieldset>
    </form>
  )
}

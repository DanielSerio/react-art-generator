import React from 'react'
import { FieldError, useForm } from 'react-hook-form'
import FormControl, { FormControlProps } from './FormControl'

export interface MainFormParams {
  height: number
  width: number
}

export type RequiredFieldParams = [keyof MainFormParams, { required: string }]

export default function MainForm () {
  const { register, handleSubmit, formState: { errors } } = useForm<MainFormParams>({
    mode: 'onBlur',
    defaultValues: {
      height: 500,
      width: 350
    }
  })

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
    </form>
  )
}

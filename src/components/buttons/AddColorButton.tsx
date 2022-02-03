import React, { ComponentProps } from 'react'
import { IoMdAdd } from 'react-icons/io'

export type AddColorButtonProps = ComponentProps<'button'>

export default function AddColorButton ({ ...props }: AddColorButtonProps) {
  return (
    <button type="button" className="btn btn-outline btn-add-color" {...props}>
      <span>Add Color</span>
      <span><IoMdAdd /></span>
    </button>
  )
}

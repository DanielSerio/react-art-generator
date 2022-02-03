import React, { ComponentProps } from 'react'
import { GiLargePaintBrush } from 'react-icons/gi'

export type GenerateButtonProps = ComponentProps<'button'>

export default function GenerateButton ({ ...props }: GenerateButtonProps) {
  return (
    <button type="submit" className="btn btn-submit btn-generate" {...props}>
      <span>Generate</span>
      <span><GiLargePaintBrush /></span>
    </button>
  )
}

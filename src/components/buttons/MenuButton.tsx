import React, { ComponentProps, ReactElement } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export type MenuButtonProps = ComponentProps<'button'>

/**
 * Button component that has a menu icon.
 * @param {MenuButtonProps} props - {@link MenuButtonProps}
 * @returns {ReactElement} MenuButton Component
 */
export default function MenuButton ({ ...props }: MenuButtonProps) {
  return (
    <button className="btn btn-minimal btn-menu" {...props}>
      <IoIosArrowForward />
    </button>
  )
}

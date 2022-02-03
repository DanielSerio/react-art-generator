import React, { ComponentProps, MouseEvent } from 'react'
import { IoMdRemove } from 'react-icons/io'

export interface SwatchProps extends ComponentProps<'li'> {
  color: string
}

/**
 * Swatch element with a color and a remove button.
 * @param {SwatchProps}  - color - the color of the swatch
 * @returns {ReactElement} Swatch component.
 */
export function Swatch ({ color, ...props }: SwatchProps) {
  return (
    <li className="swatch" {...props}>
      <span className="remove" data-color={color}><IoMdRemove /></span>
      <div className="color" style={{ backgroundColor: color }}></div>
    </li>
  )
}

export interface SwatchViewProps {
  colors: string[]
  removeColor: (color: string) => void
}

export default function SwatchView ({ colors, removeColor }: SwatchViewProps) {
  /**
   * Removes the color from the list of colors. click listener on
   * UL element instead of individual elements. (Event bubbling).
   * @param e - The event object that was triggered.
   * @returns {void} None
   */
  const handleListClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement
    const tagName: string = target.tagName.toUpperCase()
    let color: string|undefined

    if (tagName === 'SPAN') color = target.dataset.color
    if (tagName === 'SVG') color = (target.parentElement as HTMLElement).dataset.color

    if (color && colors.includes(color)) removeColor(color)
  }

  return (
    <ul className="swatch-view" onClick={handleListClick}>
      {colors.length < 1 && <span>Please add a color.</span>}
      {Boolean(colors.length) &&
        colors.map((color: string) => <Swatch key={color} color={color}/>)
      }
    </ul>
  )
}

import React, { ComponentProps, ReactElement } from 'react'

export interface FormControlProps extends ComponentProps<'label'> {
  labelText: string
  labelHelper?: string
  error?: string
  inline?: true
}

/**
 * Form control component with a label and an error message.
 * @param {FormControlProps}  - labelText: The text that will be displayed in the label.
 * @returns {ReactElement} FormControl Component
 */
export default function FormControl ({ labelText, className, children, inline, labelHelper, error, ...props }: FormControlProps) {
  const formatClassNames = () => {
    return `form-control ${inline ? 'inline' : ''} ${error ? 'error' : ''} ${className || ''}`.replace(/\s{2,}/g, ' ').trimEnd()
  }
  return (
    <div className={formatClassNames()}>
      {Boolean(error) && <span className="error-message">{error}</span>}
      {children}
      <label className="label" {...props}>
        <span className="text">{labelText}</span>
        {Boolean(labelHelper) && <span className="helper">{labelHelper}</span>}
      </label>
    </div>
  )
}

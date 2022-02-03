import React, { ComponentProps } from 'react'
import { FiDownload } from 'react-icons/fi'

export type DownloadButtonProps = ComponentProps<'button'>

export default function DownloadButton ({ ...props }: DownloadButtonProps) {
  return (
    <button type="button" className="btn btn-submit btn-download" {...props}>
      <span>Download</span>
      <span><FiDownload /></span>
    </button>
  )
}

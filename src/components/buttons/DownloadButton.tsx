import React, { ComponentProps, useContext } from 'react'
import { FiDownload } from 'react-icons/fi'
import { ImgSrcContext } from '../../context/ImgSrcContext'

export type DownloadButtonProps = ComponentProps<'button'>

export default function DownloadButton ({ ...props }: DownloadButtonProps) {
  const { src } = useContext(ImgSrcContext)
  return (
    <button type="button" className="btn btn-submit btn-download" {...props}>
      <a href={`${src}`} target={'_blank'} rel="noreferrer">
        <span>Download</span>
        <span><FiDownload /></span>
      </a>
    </button>
  )
}

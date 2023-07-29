import * as React from 'react'

interface DeleteIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const DeleteIcon = ({ isActive, color, colorActive }: DeleteIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.295'
      height='22.706'
      viewBox='0 0 19.295 22.706'
    >
      <path
        id='delete_FILL0_wght400_GRAD0_opsz48'
        d='M164.3-817.294a1.886,1.886,0,0,1-1.383-.575,1.886,1.886,0,0,1-.575-1.383v-17.809H161v-1.959h5.338V-840h8.619v.979h5.338v1.959h-1.338v17.809a1.879,1.879,0,0,1-.588,1.371,1.879,1.879,0,0,1-1.371.588ZM177-837.062H164.3v17.809H177Zm-10.039,15h1.959v-12.227h-1.959Zm5.419,0h1.959v-12.227h-1.959Zm-8.08-15v0Z'
        transform='translate(-161 840)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default DeleteIcon

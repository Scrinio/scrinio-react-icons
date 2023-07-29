import * as React from 'react'

interface PencilEditIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const PencilEditIcon = ({
  isActive,
  color,
  colorActive
}: PencilEditIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13.143'
      height='13.143'
      viewBox='0 0 13.143 13.143'
    >
      <path
        id='edit_FILL0_wght400_GRAD0_opsz48'
        d='M121.076,215.067h.789l7.943-7.943-.789-.789-7.943,7.943Zm11.009-8.714-2.3-2.3.753-.753a1.083,1.083,0,0,1,1.506,0l.789.789a1.083,1.083,0,0,1,0,1.506Zm-.753.753-9.037,9.037H120v-2.3l9.037-9.037Zm-1.919-.377-.394-.394.789.789Z'
        transform='translate(-120 -203)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default PencilEditIcon

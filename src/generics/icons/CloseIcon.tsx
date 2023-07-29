import * as React from 'react'

interface CloseIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const CloseIcon = ({ isActive, color, colorActive }: CloseIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13.635'
      height='13.634'
      viewBox='0 0 13.635 13.634'
    >
      <path
        id='dangerous_FILL0_wght400_GRAD0_opsz48'
        d='M127.159-820.942l5.082-5.082,5.082,5.082,1.735-1.735-5.082-5.082,5.082-5.082-1.735-1.735-5.082,5.082-5.082-5.082-1.735,1.735,5.082,5.082-5.082,5.082ZM132.241-827.759Z'
        transform='translate(-125.424 834.576)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default CloseIcon

import * as React from 'react'

interface ArrowFatDownIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowFatDownIcon = ({
  isActive,
  color,
  colorActive
}: ArrowFatDownIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='15'
      viewBox='0 0 17 15'
    >
      <path
        id='Polígono_4'
        data-name='Polígono 4'
        d='M7.63,1.535a1,1,0,0,1,1.74,0l6.784,11.972A1,1,0,0,1,15.284,15H1.716a1,1,0,0,1-.87-1.493Z'
        transform='translate(17 15) rotate(180)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowFatDownIcon

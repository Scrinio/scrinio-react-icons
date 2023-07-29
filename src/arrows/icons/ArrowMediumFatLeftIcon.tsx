import * as React from 'react'

interface ArrowMediumFatLeftIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowMediumFatLeftIcon = ({
  isActive,
  color,
  colorActive
}: ArrowMediumFatLeftIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9.539'
      height='16.885'
      viewBox='0 0 9.539 16.885'
    >
      <path
        id='Trazado_25450'
        data-name='Trazado 25450'
        d='M9.2.317a1.082,1.082,0,0,0-1.531,0L.317,7.668a1.082,1.082,0,0,0,0,1.531l7.356,7.35A1.082,1.082,0,1,0,9.2,15.018L2.611,8.433,9.2,1.849A1.082,1.082,0,0,0,9.2.317Z'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowMediumFatLeftIcon

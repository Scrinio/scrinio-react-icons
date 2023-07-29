import * as React from 'react'

interface ArrowFatDownIconSmallProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowFatDownIconSmall = ({
  isActive,
  color,
  colorActive
}: ArrowFatDownIconSmallProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12.066'
      height='9.872'
      viewBox='0 0 12.066 9.872'
    >
      <path
        id='Polígono_63'
        data-name='Polígono 63'
        d='M6.033,0l6.033,9.872H0Z'
        transform='translate(12.066 9.872) rotate(180)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowFatDownIconSmall

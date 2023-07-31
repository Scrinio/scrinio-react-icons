import * as React from 'react'

interface PlusIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const PlusIcon = ({ isActive, color, colorActive }: PlusIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='24'
      viewBox='0 0 11 24'
    >
      <text
        id='_'
        data-name='+'
        transform='translate(0 19)'
        fill={isActive ? customActiveColor : customColor}
        fontSize='18.5'
        fontFamily='Roboto-Regular, Roboto'
      >
        <tspan x='0' y='0'>
          +
        </tspan>
      </text>
    </svg>
  )
}

export default PlusIcon

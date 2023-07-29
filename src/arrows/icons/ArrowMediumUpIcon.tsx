import * as React from 'react'

interface ArrowMediumUpIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowMediumUpIcon = ({
  isActive,
  color,
  colorActive
}: ArrowMediumUpIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.367'
      height='16.367'
      viewBox='0 0 16.367 16.367'
    >
      <path
        id='noun_go_1851808'
        d='M590.959,597.353a.807.807,0,0,1,0-1.141l2.97-2.97h-9.142a.807.807,0,0,1,0-1.614h9.091l-2.92-2.92a.807.807,0,1,1,1.142-1.141l4.767,4.893-4.768,4.893a.807.807,0,0,1-1.142,0Z'
        transform='translate(-828.241 6.744) rotate(-45)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowMediumUpIcon

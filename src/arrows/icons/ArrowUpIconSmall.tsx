import * as React from 'react'

interface ArrowUpIconSmallProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowUpIconSmall = ({
  isActive,
  color,
  colorActive
}: ArrowUpIconSmallProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11.849'
      height='12.408'
      viewBox='0 0 11.849 12.408'
    >
      <path
        id='Unión_86'
        data-name='Unión 86'
        d='M-7701.207,11.594a.861.861,0,0,1,0-1.229l3.572-3.533h-8.485a.875.875,0,0,1-.881-.869.877.877,0,0,1,.881-.871h8.563l-3.649-3.608a.863.863,0,0,1,0-1.231.882.882,0,0,1,.622-.255.881.881,0,0,1,.621.255l5.114,5.055a.862.862,0,0,1,0,1.229l-5.114,5.055a.88.88,0,0,1-.621.255A.881.881,0,0,1-7701.207,11.594Z'
        transform='translate(0 -7694.593) rotate(-90)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowUpIconSmall

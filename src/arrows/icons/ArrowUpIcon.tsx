import * as React from 'react'

interface ArrowUpIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowUpIcon = ({ isActive, color, colorActive }: ArrowUpIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15.35'
      height='19.341'
      viewBox='0 0 15.35 19.341'
    >
      <path
        id='Unión_78'
        data-name='Unión 78'
        d='M12306.348,10801.059a.939.939,0,0,1,0-1.394l5.379-5.006-14.7,0a1.084,1.084,0,0,1-.737-.309.935.935,0,0,1-.289-.706,1.024,1.024,0,0,1,1.057-.958h14.67l-5.379-5.009a.946.946,0,0,1-.31-.7.926.926,0,0,1,.308-.692l.007-.009a1.129,1.129,0,0,1,1.483,0l.01.008,7.185,6.7a.934.934,0,0,1,0,1.391l-7.474,6.963-.091-.042a1.129,1.129,0,0,1-1.116-.229Z'
        transform='translate(-10785.998 12315.34) rotate(-90)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowUpIcon

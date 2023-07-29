import * as React from 'react'

interface ArrowRightIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowRightIcon = ({
  isActive,
  color,
  colorActive
}: ArrowRightIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.033'
      height='14.002'
      viewBox='0 0 17.033 14.002'
    >
      <path
        id='Unión_68'
        data-name='Unión 68'
        d='M12305.113,10799.735a.875.875,0,0,1,0-1.271l4.738-4.566-12.947,0a.937.937,0,0,1-.651-.281.872.872,0,0,1-.254-.644.914.914,0,0,1,.931-.873h12.922l-4.738-4.571a.873.873,0,0,1-.273-.635.86.86,0,0,1,.271-.631l.006-.009a.973.973,0,0,1,1.307,0l.008.009,6.329,6.105a.878.878,0,0,1,.271.636.868.868,0,0,1-.274.633l-6.581,6.352-.081-.037a.991.991,0,0,1-.321.055A.947.947,0,0,1,12305.113,10799.735Z'
        transform='translate(-12295.999 -10785.999)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowRightIcon

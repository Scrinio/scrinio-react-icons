import * as React from 'react'

interface OfferModalityIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferModalityIcon = ({
  isActive,
  color,
  colorActive
}: OfferModalityIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='43.025'
      height='43.024'
      viewBox='0 0 43.025 43.024'
    >
      <path
        id='border_all_FILL0_wght400_GRAD0_opsz48'
        d='M120,259.024V216h43.025v43.024Zm39.439-3.585V239.3H143.3v16.134Zm0-35.854H143.3v16.134h16.134Zm-35.854,0v16.134H139.72V219.585Zm0,35.854H139.72V239.3H123.585Z'
        transform='translate(-120 -216)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferModalityIcon

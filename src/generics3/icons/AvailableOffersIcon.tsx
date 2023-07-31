import * as React from 'react'

interface AvailableOffersIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const AvailableOffersIcon = ({
  isActive,
  color,
  colorActive
}: AvailableOffersIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='47.805'
      height='47.805'
      viewBox='0 0 47.805 47.805'
    >
      <path
        id='villa_FILL0_wght400_GRAD0_opsz48'
        d='M120,263.8V229.146L154.194,216v23.9h5.644a3.984,3.984,0,1,1,7.967,0v23.9Zm3.984-3.984H136.6V239.9H150.21V221.776l-26.226,10.092Zm16.6,0h9.627v-7.3h3.984v7.3h9.627V243.886H140.583ZM132.615,235.919ZM152.2,259.821ZM152.2,258.161Z'
        transform='translate(-120 -216)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default AvailableOffersIcon

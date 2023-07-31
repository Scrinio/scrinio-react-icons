import * as React from 'react'

interface OfferExperienceIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferExperienceIcon = ({
  isActive,
  color,
  colorActive
}: OfferExperienceIconProps) => {
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
        id='badge_FILL0_wght400_GRAD0_opsz48'
        d='M83.585,223.8A3.676,3.676,0,0,1,80,220.219V191.537a3.676,3.676,0,0,1,3.585-3.585H98.524v-8.366a3.675,3.675,0,0,1,3.61-3.585h3.536a3.675,3.675,0,0,1,3.61,3.585v8.366H124.22a3.676,3.676,0,0,1,3.585,3.585v28.683a3.676,3.676,0,0,1-3.585,3.585Zm0-3.585H124.22V191.537H109.281v1.793a3.337,3.337,0,0,1-1.076,2.629,3.691,3.691,0,0,1-2.534.956h-3.536a3.691,3.691,0,0,1-2.534-.956,3.337,3.337,0,0,1-1.076-2.629v-1.793H83.585Zm5.5-6.394h14.282v-.837a3.459,3.459,0,0,0-.538-1.912,2.7,2.7,0,0,0-1.374-1.135,23.99,23.99,0,0,0-2.988-.866,10.949,10.949,0,0,0-2.091-.209,11.839,11.839,0,0,0-2.42.269,26.388,26.388,0,0,0-2.9.807,2.677,2.677,0,0,0-1.434,1.135,3.459,3.459,0,0,0-.538,1.912Zm20.078-4H119.32v-2.988H109.161Zm-12.788-2.988a3.213,3.213,0,1,0-2.286-.941A3.112,3.112,0,0,0,96.373,206.834Zm12.788-3.765H119.32v-2.988H109.161Zm-7.051-9.74H105.7V179.585H102.11ZM103.9,205.878Z'
        transform='translate(-80 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferExperienceIcon

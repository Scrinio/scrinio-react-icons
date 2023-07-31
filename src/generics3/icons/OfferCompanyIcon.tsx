import * as React from 'react'

interface OfferCompanyIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferCompanyIcon = ({
  isActive,
  color,
  colorActive
}: OfferCompanyIconProps) => {
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
        id='apartment_FILL0_wght400_GRAD0_opsz48'
        d='M120,259.024V225.86h9.86V216h23.3v19.719h9.86v23.3H144.679v-9.86h-6.334v9.86Zm3.585-3.585h6.274v-6.274h-6.274Zm0-9.86h6.274V239.3h-6.274Zm0-9.86h6.274v-6.274h-6.274Zm9.86,9.86h6.274V239.3h-6.274Zm0-9.86h6.274v-6.274h-6.274Zm0-9.86h6.274v-6.274h-6.274Zm9.86,19.719h6.274V239.3H143.3Zm0-9.86h6.274v-6.274H143.3Zm0-9.86h6.274v-6.274H143.3Zm9.86,29.579h6.274v-6.274h-6.274Zm0-9.86h6.274V239.3h-6.274Z'
        transform='translate(-120 -216)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferCompanyIcon

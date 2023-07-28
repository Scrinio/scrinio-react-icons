import * as React from 'react'

interface StatisticsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const StatisticsIcon = ({
  isActive,
  color,
  colorActive
}: StatisticsIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.507'
      height='22.941'
      viewBox='0 0 19.507 22.941'
    >
      <path
        id='signal_cellular_alt_FILL0_wght400_GRAD0_opsz48'
        d='M203-777.059v-8.6h3.585v8.6Zm7.961,0v-15.772h3.585v15.772Zm7.961,0V-800h3.585v22.941Z'
        transform='translate(-203 800)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default StatisticsIcon

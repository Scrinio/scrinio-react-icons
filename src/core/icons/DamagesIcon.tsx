import * as React from 'react'

interface DamagesIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const DamagesIcon = ({ isActive, color, colorActive }: DamagesIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24.5'
      height='24.5'
      viewBox='0 0 24.5 24.5'
    >
      <path
        id='dangerous_FILL0_wght400_GRAD0_opsz48'
        d='M127.146-815.5,120-822.646v-10.208L127.146-840h10.208l7.146,7.146v10.208l-7.146,7.146Zm.919-6.635,4.186-4.185,4.185,4.185,1.429-1.429-4.186-4.185,4.186-4.185-1.429-1.429-4.185,4.185-4.186-4.185-1.429,1.429,4.185,4.185-4.185,4.185ZM128-817.542H136.5l5.955-5.955V-832l-5.955-5.955H128L122.042-832v8.507ZM132.25-827.75Z'
        transform='translate(-120 840)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default DamagesIcon

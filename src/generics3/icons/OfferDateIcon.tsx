import * as React from 'react'

interface OfferDateIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferDateIcon = ({
  isActive,
  color,
  colorActive
}: OfferDateIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='43.025'
      height='47.805'
      viewBox='0 0 43.025 47.805'
    >
      <path
        id='calendar_month_FILL0_wght400_GRAD0_opsz48'
        d='M123.585,223.8A3.676,3.676,0,0,1,120,220.219V183.171a3.676,3.676,0,0,1,3.585-3.585h3.884V176h3.884v3.585h20.317V176h3.884v3.585h3.884a3.676,3.676,0,0,1,3.585,3.585v37.049a3.676,3.676,0,0,1-3.585,3.585Zm0-3.585h35.854v-25.7H123.585Zm0-29.28h35.854v-7.768H123.585Zm0,0v0Zm17.927,13.744a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,141.512,204.683Zm-9.561,0a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,131.951,204.683Zm19.122,0a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,151.073,204.683Zm-9.561,9.561a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,141.512,214.244Zm-9.561,0a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,131.951,214.244Zm19.122,0a2.348,2.348,0,1,1,1.7-.687A2.313,2.313,0,0,1,151.073,214.244Z'
        transform='translate(-120 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferDateIcon

import * as React from 'react'

interface OfferChargeIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferChargeIcon = ({
  isActive,
  color,
  colorActive
}: OfferChargeIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='47.805'
      height='45.414'
      viewBox='0 0 47.805 45.414'
    >
      <path
        id='work_FILL0_wght400_GRAD0_opsz48'
        d='M83.585,221.414A3.676,3.676,0,0,1,80,217.829V189.146a3.676,3.676,0,0,1,3.585-3.585H94.342v-5.976A3.676,3.676,0,0,1,97.927,176h11.951a3.676,3.676,0,0,1,3.585,3.585v5.976H124.22a3.676,3.676,0,0,1,3.585,3.585v28.683a3.676,3.676,0,0,1-3.585,3.585Zm0-3.585H124.22V189.146H83.585Zm14.342-32.268h11.951v-5.976H97.927ZM83.585,217.829v0Z'
        transform='translate(-80 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferChargeIcon

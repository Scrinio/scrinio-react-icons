import * as React from 'react'

interface OfferMsgIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferMsgIcon = ({ isActive, color, colorActive }: OfferMsgIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='47.805'
      height='38.244'
      viewBox='0 0 47.805 38.244'
    >
      <path
        id='mail_FILL0_wght400_GRAD0_opsz48'
        d='M83.585,294.244A3.676,3.676,0,0,1,80,290.658V259.585A3.676,3.676,0,0,1,83.585,256H124.22a3.676,3.676,0,0,1,3.585,3.585v31.073a3.676,3.676,0,0,1-3.585,3.585ZM103.9,276.2,83.585,262.872v27.786H124.22V262.872Zm0-3.585,20.078-13.027h-40.1Zm-20.317-9.74v0Z'
        transform='translate(-80 -256)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferMsgIcon

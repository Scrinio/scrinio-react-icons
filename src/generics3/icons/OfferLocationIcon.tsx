import * as React from 'react'

interface OfferLocationIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferLocationIcon = ({
  isActive,
  color,
  colorActive
}: OfferLocationIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='38.244'
      height='47.805'
      viewBox='0 0 38.244 47.805'
    >
      <path
        id='location_on_FILL0_wght400_GRAD0_opsz48'
        d='M179.127,199.3a4.192,4.192,0,1,0-2.958-1.225A4.016,4.016,0,0,0,179.127,199.3Zm-.005,19.779a69.987,69.987,0,0,0,11.742-13.116q3.795-5.886,3.795-10.368a15.583,15.583,0,0,0-4.5-11.527,15.816,15.816,0,0,0-22.075,0,15.583,15.583,0,0,0-4.5,11.527q0,4.482,3.884,10.368A76,76,0,0,0,179.122,219.084Zm0,4.721q-9.621-8.187-14.371-15.208T160,195.6q0-8.963,5.766-14.282a19.429,19.429,0,0,1,26.711,0q5.766,5.318,5.766,14.282,0,5.976-4.751,13T179.122,223.8ZM179.122,195.6Z'
        transform='translate(-160 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferLocationIcon

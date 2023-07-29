import * as React from 'react'

interface Notification2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Notification2Icon = ({
  isActive,
  color,
  colorActive
}: Notification2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18.491'
      height='20.748'
      viewBox='0 0 18.491 20.748'
    >
      <path
        id='notifications_active_FILL0_wght400_GRAD0_opsz48'
        d='M124-871.882a9.263,9.263,0,0,1,.882-3.981,8.979,8.979,0,0,1,2.516-3.2l1.063,1.167a7.853,7.853,0,0,0-2.14,2.684,7.506,7.506,0,0,0-.765,3.333Zm16.935,0a7.84,7.84,0,0,0-.726-3.333,7.449,7.449,0,0,0-2.1-2.684l1.063-1.167a9.107,9.107,0,0,1,2.464,3.216,9.411,9.411,0,0,1,.856,3.968Zm-16,9.518v-1.556h2.178v-7.936a6.261,6.261,0,0,1,1.284-3.877,5.533,5.533,0,0,1,3.384-2.14v-.752a1.274,1.274,0,0,1,.428-.986,1.471,1.471,0,0,1,1.024-.389,1.471,1.471,0,0,1,1.024.389,1.274,1.274,0,0,1,.428.986v.752a5.586,5.586,0,0,1,3.4,2.14,6.22,6.22,0,0,1,1.3,3.877v7.936h2.153v1.556ZM133.233-870.015Zm0,10.763a2.011,2.011,0,0,1-1.452-.609,1.977,1.977,0,0,1-.622-1.465h4.15a2,2,0,0,1-.609,1.465A2,2,0,0,1,133.233-859.252Zm-4.564-4.668h9.155v-7.936a4.5,4.5,0,0,0-1.323-3.268,4.365,4.365,0,0,0-3.242-1.349A4.408,4.408,0,0,0,130-875.124a4.472,4.472,0,0,0-1.336,3.268Z'
        transform='translate(-124 880)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Notification2Icon

import * as React from 'react'

interface PhoneIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const PhoneIcon = ({ isActive, color, colorActive }: PhoneIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.998'
      height='19.998'
      viewBox='0 0 19.998 19.998'
    >
      <path
        id='call_FILL0_wght400_GRAD0_opsz48'
        d='M138.748-820a14.981,14.981,0,0,1-6.735-1.667A22.868,22.868,0,0,1,126-826a22.868,22.868,0,0,1-4.333-6.013A14.982,14.982,0,0,1,120-838.75a1.211,1.211,0,0,1,.357-.893,1.211,1.211,0,0,1,.893-.357h3.889a.989.989,0,0,1,.675.264,1.214,1.214,0,0,1,.38.708l.75,3.5a2,2,0,0,1-.014.708,1.071,1.071,0,0,1-.292.542l-2.777,2.805a23.058,23.058,0,0,0,3.486,4.5,19.263,19.263,0,0,0,4.375,3.25l2.639-2.722a1.536,1.536,0,0,1,.639-.431,1.284,1.284,0,0,1,.722-.042l3.305.722a1.229,1.229,0,0,1,.7.422A1.169,1.169,0,0,1,140-825v3.75a1.211,1.211,0,0,1-.357.893A1.211,1.211,0,0,1,138.748-820Zm-15.721-13,2.25-2.278-.639-3.055h-2.972a9.56,9.56,0,0,0,.333,2.375A22.382,22.382,0,0,0,123.027-833Zm10.249,10.082a13.872,13.872,0,0,0,2.472.861,13.025,13.025,0,0,0,2.583.389v-2.972l-2.861-.583ZM123.027-833ZM133.276-822.918Z'
        transform='translate(-120 840)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default PhoneIcon

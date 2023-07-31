import * as React from 'react'

interface OfferCalendarIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferCalendarIcon = ({
  isActive,
  color,
  colorActive
}: OfferCalendarIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.002'
      height='17.001'
      viewBox='0 0 17.002 17.001'
    >
      <path
        id='Unión_84'
        data-name='Unión 84'
        d='M-10710.875-1671a2.129,2.129,0,0,1-2.126-2.125v-11.334a2.128,2.128,0,0,1,2.126-2.125h2.125v-.708a.709.709,0,0,1,.709-.708.709.709,0,0,1,.708.708v.708h5.666v-.708a.71.71,0,0,1,.709-.708.708.708,0,0,1,.708.708v.708h2.126a2.127,2.127,0,0,1,2.125,2.125v11.334a2.129,2.129,0,0,1-2.125,2.125Zm-.709-2.125a.71.71,0,0,0,.709.708h12.751a.709.709,0,0,0,.708-.708v-7.793h-14.168Zm14.168-9.208v-2.125a.709.709,0,0,0-.708-.708h-2.126v.708a.708.708,0,0,1-.708.708.71.71,0,0,1-.709-.708v-.708h-5.666v.708a.709.709,0,0,1-.708.708.709.709,0,0,1-.709-.708v-.708h-2.125a.71.71,0,0,0-.709.708v2.125Z'
        transform='translate(10713.001 1688)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OfferCalendarIcon

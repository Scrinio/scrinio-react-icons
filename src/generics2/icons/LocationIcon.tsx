import * as React from 'react'

interface LocationIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const LocationIcon = ({ isActive, color, colorActive }: LocationIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9.683'
      height='14.345'
      viewBox='0 0 9.683 14.345'
    >
      <path
        id='pin_drop_FILL0_wght400_GRAD0_opsz48'
        d='M214.841,186.436a14.112,14.112,0,0,0,2.815-2.895,4.674,4.674,0,0,0,.951-2.592,3.7,3.7,0,0,0-1.336-2.992,3.653,3.653,0,0,0-1.224-.672,3.59,3.59,0,0,0-2.411,0,3.653,3.653,0,0,0-1.224.672,3.7,3.7,0,0,0-1.336,2.992,4.674,4.674,0,0,0,.951,2.592A14.11,14.11,0,0,0,214.841,186.436Zm0,1.363a16.773,16.773,0,0,1-3.649-3.536A5.746,5.746,0,0,1,210,180.953a4.946,4.946,0,0,1,.439-2.147,4.858,4.858,0,0,1,1.139-1.551,4.759,4.759,0,0,1,1.56-.941,4.781,4.781,0,0,1,3.407,0,4.758,4.758,0,0,1,1.56.941,4.856,4.856,0,0,1,1.139,1.552,4.957,4.957,0,0,1,.439,2.15,5.734,5.734,0,0,1-1.192,3.309A16.822,16.822,0,0,1,214.841,187.8Zm0-5.7a1.258,1.258,0,1,0-.888-.368A1.2,1.2,0,0,0,214.843,182.1ZM210,190.345v-1.076h9.683v1.076ZM214.841,180.949Z'
        transform='translate(-210 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default LocationIcon

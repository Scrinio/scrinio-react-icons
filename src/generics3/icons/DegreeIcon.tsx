import * as React from 'react'

interface DegreeIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const DegreeIcon = ({ isActive, color, colorActive }: DegreeIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45.964'
      height='45.964'
      viewBox='0 0 45.964 45.964'
    >
      <g id='_17' data-name='17' transform='translate(2 2)'>
        <path
          id='Trazado_8037'
          data-name='Trazado 8037'
          d='M52.613,46.1H36.881a1.35,1.35,0,1,1,0-2.7H51.263V10.7H10.7V43.4H25.082a1.35,1.35,0,1,1,0,2.7H9.35A1.35,1.35,0,0,1,8,44.747V9.35A1.35,1.35,0,0,1,9.35,8H52.613a1.35,1.35,0,0,1,1.35,1.35v35.4A1.35,1.35,0,0,1,52.613,46.1Z'
          transform='translate(-10 -10)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Elipse_345'
          data-name='Elipse 345'
          d='M5.089-2A6.883,6.883,0,0,1,10.128.2a7.566,7.566,0,0,1,2.049,5.224,7.566,7.566,0,0,1-2.049,5.224,6.866,6.866,0,0,1-10.079,0A7.566,7.566,0,0,1-2,5.426,7.566,7.566,0,0,1,.049.2,6.883,6.883,0,0,1,5.089-2Zm0,12.152A4.572,4.572,0,0,0,9.477,5.426,4.572,4.572,0,0,0,5.089.7,4.572,4.572,0,0,0,.7,5.426,4.572,4.572,0,0,0,5.089,10.152Z'
          transform='translate(15.937 15.608)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_8038'
          data-name='Trazado 8038'
          d='M37.149,54.332a1.349,1.349,0,0,1-.749-.227L31.25,50.672,26.1,54.105A1.35,1.35,0,0,1,24,52.982V31.35a1.35,1.35,0,0,1,2.7,0V50.459l3.8-2.534a1.35,1.35,0,0,1,1.5,0l3.8,2.534V31.35a1.35,1.35,0,0,1,2.7,0V52.982a1.35,1.35,0,0,1-1.35,1.35Z'
          transform='translate(-10.268 -10.368)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_8039'
          data-name='Trazado 8039'
          d='M46.814,40.3H36.982a1.35,1.35,0,0,1,0-2.7h8.482V16.7H16.7V37.6h8.482a1.35,1.35,0,1,1,0,2.7H15.35A1.35,1.35,0,0,1,14,38.948V15.35A1.35,1.35,0,0,1,15.35,14H46.814a1.35,1.35,0,0,1,1.35,1.35v23.6A1.35,1.35,0,0,1,46.814,40.3Z'
          transform='translate(-10.1 -10.1)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default DegreeIcon

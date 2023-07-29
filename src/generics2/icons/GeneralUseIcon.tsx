import * as React from 'react'

interface GeneralUseIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const GeneralUseIcon = ({
  isActive,
  color,
  colorActive
}: GeneralUseIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20.102'
      height='20.114'
      viewBox='0 0 20.102 20.114'
    >
      <g
        id='_48-ui-user-card'
        data-name='48-ui-user-card'
        transform='translate(0.001 0.02)'
      >
        <path
          id='Trazado_25470'
          data-name='Trazado 25470'
          d='M6.256,18A1.256,1.256,0,0,0,5,19.256v1.885A1.256,1.256,0,0,0,6.256,22.4H8.769a1.256,1.256,0,0,0,1.256-1.256V19.256A1.256,1.256,0,0,0,8.769,18Zm2.513,3.141H6.256V19.256H8.769Z'
          transform='translate(-1.859 -6.7)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25471'
          data-name='Trazado 25471'
          d='M0,8.065V9.415H1.256V8.065A2.645,2.645,0,0,1,3.769,5.307,2.645,2.645,0,0,1,6.282,8.065V9.415H7.538V8.065A4.033,4.033,0,0,0,5.364,4.434a2.513,2.513,0,1,0-3.191,0A4.033,4.033,0,0,0,0,8.065ZM3.769,1.249A1.256,1.256,0,1,1,2.512,2.505,1.256,1.256,0,0,1,3.769,1.249Z'
          transform='translate(0)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25472'
          data-name='Trazado 25472'
          d='M24.051,0H14V1.256H24.051v4.4h1.256v-4.4A1.256,1.256,0,0,0,24.051,0Z'
          transform='translate(-5.206 -0.007)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25473'
          data-name='Trazado 25473'
          d='M18.845,25.91H1.256V19H0v6.91a1.256,1.256,0,0,0,1.256,1.256H18.845A1.256,1.256,0,0,0,20.1,25.91v-4.4H18.845Z'
          transform='translate(0 -7.072)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25474'
          data-name='Trazado 25474'
          d='M15.628,24.256H21.91a.628.628,0,1,0,0-1.256H15.628a.628.628,0,0,0,0,1.256Z'
          transform='translate(-5.578 -8.559)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25475'
          data-name='Trazado 25475'
          d='M15.628,19.256H21.91a.628.628,0,1,0,0-1.256H15.628a.628.628,0,0,0,0,1.256Z'
          transform='translate(-5.578 -6.7)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25476'
          data-name='Trazado 25476'
          d='M15.628,14.256H21.91a.628.628,0,1,0,0-1.256H15.628a.628.628,0,0,0,0,1.256Z'
          transform='translate(-5.578 -4.841)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25477'
          data-name='Trazado 25477'
          d='M15.628,9.256H21.91A.628.628,0,1,0,21.91,8H15.628a.628.628,0,0,0,0,1.256Z'
          transform='translate(-5.578 -2.982)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default GeneralUseIcon

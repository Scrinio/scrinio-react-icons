import * as React from 'react'

interface WhatsAppIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const WhatsAppIcon = ({ isActive, color, colorActive }: WhatsAppIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Grupo_8322'
      data-name='Grupo 8322'
      xmlns='http://www.w3.org/2000/svg'
      width='21.725'
      height='21.741'
      viewBox='0 0 21.725 21.741'
    >
      <g id='Grupo_8323' data-name='Grupo 8323' transform='translate(0 0)'>
        <path
          id='Trazado_25452'
          data-name='Trazado 25452'
          d='M13.832.428A10.067,10.067,0,0,0,2.78,3.991C-.034,7.456-.342,11.35,1.57,15.383a1.753,1.753,0,0,1,.093,1.493C1.093,18.443.58,20.031,0,21.742c.357-.108.573-.171.787-.238,1.558-.493,3.112-1,4.678-1.467a1.321,1.321,0,0,1,.85.063A11.856,11.856,0,0,0,10.2,21.138,10.546,10.546,0,0,0,21.572,8.947,10.036,10.036,0,0,0,13.832.428m2.456,17.346a8.582,8.582,0,0,1-9.623.547A1.309,1.309,0,0,0,5.5,18.213c-.87.31-1.76.562-2.776.88.341-1.024.621-1.91.936-2.784a.894.894,0,0,0-.093-.891A8.6,8.6,0,0,1,3.7,5.6a8.611,8.611,0,0,1,9.062-3.7,8.7,8.7,0,0,1,7.071,6.97,8.456,8.456,0,0,1-3.546,8.9'
          transform='translate(0 0)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25453'
          data-name='Trazado 25453'
          d='M60.412,56.76c-.256-.125-.512-.252-.769-.374-1.031-.49-1.031-.49-1.726.375-.487.606-.691.649-1.41.32a6.843,6.843,0,0,1-2.66-2.183c-.644-.862-.625-.844,0-1.7a1.229,1.229,0,0,0,.233-.9,19.126,19.126,0,0,0-.763-1.9.638.638,0,0,0-.715-.424c-1.232.064-1.972.937-2.092,2.413A8.935,8.935,0,0,0,51,53.99a10.266,10.266,0,0,0,7.257,5.723,2.643,2.643,0,0,0,2.528-.877,1.2,1.2,0,0,0-.377-2.075'
          transform='translate(-44.742 -44.26)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default WhatsAppIcon

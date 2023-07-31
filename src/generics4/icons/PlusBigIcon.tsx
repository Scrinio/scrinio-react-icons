import * as React from 'react'

interface PlusBigIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const PlusBigIcon = ({ isActive, color, colorActive }: PlusBigIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Grupo_8497'
      data-name='Grupo 8497'
      xmlns='http://www.w3.org/2000/svg'
      width='31.674'
      height='31.675'
      viewBox='0 0 31.674 31.675'
    >
      <g id='Grupo_8498' data-name='Grupo 8498'>
        <path
          id='Trazado_8240'
          data-name='Trazado 8240'
          d='M29.99,14.485H17.813V1.685a1.7,1.7,0,0,0-3.39,0v12.8H1.685a1.7,1.7,0,0,0,0,3.39H14.422V29.99a1.7,1.7,0,0,0,3.39,0V17.875H29.99a1.7,1.7,0,0,0,0-3.39'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default PlusBigIcon

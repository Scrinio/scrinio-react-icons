import * as React from 'react'

interface OfferActiveIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OfferActiveIcon = ({
  isActive,
  color,
  colorActive
}: OfferActiveIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Grupo_6577'
      data-name='Grupo 6577'
      xmlns='http://www.w3.org/2000/svg'
      width='13.337'
      height='13.314'
      viewBox='0 0 13.337 13.314'
    >
      <defs>
        <clipPath id='clip-path'>
          <rect
            id='Rectángulo_2882'
            data-name='Rectángulo 2882'
            width='13.337'
            height='13.314'
            fill={isActive ? customActiveColor : customColor}
          />
        </clipPath>
      </defs>
      <g id='Grupo_6519' data-name='Grupo 6519' clip-path='url(#clip-path)'>
        <path
          id='Trazado_6042'
          data-name='Trazado 6042'
          d='M13.337,6.642A6.668,6.668,0,1,1,6.68,0a6.67,6.67,0,0,1,6.656,6.642M5.711,9.726l5.17-5.169-.867-.868-4.3,4.305-1.76-1.76L3.084,7.1,5.711,9.726'
          transform='translate(0 0)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default OfferActiveIcon

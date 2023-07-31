import * as React from 'react'

interface EntrepreneurshipIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EntrepreneurshipIcon = ({
  isActive,
  color,
  colorActive
}: EntrepreneurshipIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='54.553'
      height='54.552'
      viewBox='0 0 54.553 54.552'
    >
      <g
        id='Grupo_8513'
        data-name='Grupo 8513'
        transform='translate(-241.997 -680.63) rotate(45)'
      >
        <path
          id='Trazado_4439'
          data-name='Trazado 4439'
          d='M798.3,327.52H783.171a1.291,1.291,0,0,1-1.1-.617,31.35,31.35,0,0,1,4.6-38.533l3.151-3.151a1.29,1.29,0,0,1,1.825,0l3.151,3.151a31.39,31.39,0,0,1,4.6,38.533A1.291,1.291,0,0,1,798.3,327.52Zm-14.4-2.581H797.57a28.7,28.7,0,0,0-4.594-34.745l-2.239-2.239-2.239,2.239A28.7,28.7,0,0,0,783.9,324.939Z'
          transform='translate(-99.767)'
          fill={isActive ? customActiveColor : customColor}
        />
        <g
          id='Grupo_6174'
          data-name='Grupo 6174'
          transform='translate(672.047 310.365)'
        >
          <path
            id='Trazado_4440'
            data-name='Trazado 4440'
            d='M1189.787,776.133a1.286,1.286,0,0,1-.64-.17l-6.66-3.805a1.29,1.29,0,1,1,1.28-2.241l5.345,3.054c2.425-7.56-3.622-10.605-4.358-10.944a1.29,1.29,0,0,1,1.079-2.345,12.165,12.165,0,0,1,4.589,3.889c1.578,2.267,2.956,6.151.552,11.778a1.29,1.29,0,0,1-1.187.783Z'
            transform='translate(-1154.426 -759.564)'
            fill={isActive ? customActiveColor : customColor}
          />
          <path
            id='Trazado_4441'
            data-name='Trazado 4441'
            d='M674.534,776.134a1.29,1.29,0,0,1-1.187-.783c-2.4-5.627-1.027-9.511.552-11.778a12.163,12.163,0,0,1,4.589-3.889,1.29,1.29,0,1,1,1.078,2.345c-.736.339-6.783,3.384-4.358,10.944l5.345-3.054a1.29,1.29,0,0,1,1.28,2.241l-6.66,3.806A1.29,1.29,0,0,1,674.534,776.134Z'
            transform='translate(-672.047 -759.564)'
            fill={isActive ? customActiveColor : customColor}
          />
        </g>
        <path
          id='Trazado_4443'
          data-name='Trazado 4443'
          d='M913.669,1042.346h-8.951a1.29,1.29,0,0,1-1.286-1.184l-.758-9.135a1.29,1.29,0,0,1,1.286-1.4h10.466a1.291,1.291,0,0,1,1.286,1.4l-.758,9.135A1.29,1.29,0,0,1,913.669,1042.346Zm-7.763-2.581h6.575l.544-6.554h-7.662Z'
          transform='translate(-218.223 -705.691)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_4444'
          data-name='Trazado 4444'
          d='M951.754,1211.084a1.293,1.293,0,0,1-.912-.377,10.837,10.837,0,0,1-3.109-9.046,1.291,1.291,0,0,1,2.562.316,8.266,8.266,0,0,0,1.459,5.825,8.318,8.318,0,0,0,1.46-5.823,1.291,1.291,0,0,1,2.561-.32,10.89,10.89,0,0,1-3.109,9.047A1.291,1.291,0,0,1,951.754,1211.084Z'
          transform='translate(-260.783 -866.454)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_4445'
          data-name='Trazado 4445'
          d='M935.291,638.7a5.041,5.041,0,1,1,5.04-5.041A5.047,5.047,0,0,1,935.291,638.7Zm0-7.5a2.46,2.46,0,1,0,2.46,2.46A2.463,2.463,0,0,0,935.291,631.2Z'
          transform='translate(-244.32 -328.344)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default EntrepreneurshipIcon

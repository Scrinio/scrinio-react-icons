import * as React from 'react'

interface EventPhoneIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EventPhoneIcon = ({
  isActive,
  color,
  colorActive
}: EventPhoneIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='phone-1'
      xmlns='http://www.w3.org/2000/svg'
      width='20.663'
      height='20.663'
      viewBox='0 0 20.663 20.663'
    >
      <g id='Grupo_8311' data-name='Grupo 8311' transform='translate(0 0)'>
        <path
          id='Trazado_25448'
          data-name='Trazado 25448'
          d='M15.33,21.4c-2.286,0-5.257-1.9-9.253-5.9C1.63,11.057-.221,7.879.254,5.5.772,2.912,3.7.932,3.828.849a.665.665,0,0,1,.839.083l4.7,4.7a.664.664,0,0,1,0,.94L7.256,8.685a14.316,14.316,0,0,0,2.582,3.059A14.316,14.316,0,0,0,12.9,14.326l2.112-2.112a.664.664,0,0,1,.94,0l4.7,4.7a.665.665,0,0,1,.083.839c-.083.125-2.063,3.055-4.654,3.573A3.783,3.783,0,0,1,15.33,21.4ZM4.133,2.277A6.961,6.961,0,0,0,1.559,5.763c-.37,1.848,1.467,4.809,5.459,8.8s6.953,5.828,8.8,5.459a6.961,6.961,0,0,0,3.486-2.574l-3.825-3.825L13.6,15.505c-.314.313-.8.291-1.439-.065A17.526,17.526,0,0,1,8.9,12.685,17.526,17.526,0,0,1,6.143,9.423c-.357-.642-.378-1.126-.065-1.439L7.959,6.1ZM13.069,14.4h0Z'
          transform='translate(-0.182 -0.737)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default EventPhoneIcon

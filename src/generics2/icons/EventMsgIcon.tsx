import * as React from 'react'

interface EventMsgIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EventMsgIcon = ({ isActive, color, colorActive }: EventMsgIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Grupo_9079'
      data-name='Grupo 9079'
      xmlns='http://www.w3.org/2000/svg'
      width='26.465'
      height='20.864'
      viewBox='0 0 26.465 20.864'
    >
      <path
        id='Trazado_25446'
        data-name='Trazado 25446'
        d='M27.72,8H6.636A2.672,2.672,0,0,0,4,10.636v15.7a2.653,2.653,0,0,0,2.636,2.526H27.829a2.672,2.672,0,0,0,2.636-2.636V10.636A2.849,2.849,0,0,0,27.72,8Zm1.537,18.229a1.5,1.5,0,0,1-1.537,1.537H6.636A1.5,1.5,0,0,1,5.1,26.229V10.636A1.5,1.5,0,0,1,6.636,9.1H27.829a1.5,1.5,0,0,1,1.537,1.537V26.229Z'
        transform='translate(-4 -8)'
        fill={isActive ? customActiveColor : customColor}
      />
      <g id='Grupo_9078' data-name='Grupo 9078'>
        <path
          id='Trazado_25447'
          data-name='Trazado 25447'
          d='M20.663,17.864l5.381-5.381a.544.544,0,1,0-.769-.769L16.819,20.17,8.583,11.934a.544.544,0,1,0-.769.769L13.2,18.084,7.925,23.355a.531.531,0,0,0,0,.769c.11.11.22.11.439.11s.329,0,.439-.11l5.271-5.271L16.6,21.378c.11.11.22.11.439.11s.329,0,.439-.11l2.636-2.636L25.6,24.233c.11.11.22.11.439.11s.329,0,.439-.11a.531.531,0,0,0,0-.769Z'
          transform='translate(-3.641 -7.652)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default EventMsgIcon

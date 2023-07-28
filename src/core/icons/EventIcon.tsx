import * as React from 'react'

interface EventIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EventIcon = ({ isActive, color, colorActive }: EventIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20.104'
      height='22.337'
      viewBox='0 0 20.104 22.337'
    >
      <path
        id='eventScrinioIcon'
        d='M121.675-857.663a1.607,1.607,0,0,1-1.173-.5,1.607,1.607,0,0,1-.5-1.173v-17.311a1.607,1.607,0,0,1,.5-1.173,1.607,1.607,0,0,1,1.173-.5h1.815V-880h1.815v1.675H134.8V-880h1.815v1.675h1.815a1.607,1.607,0,0,1,1.173.5,1.607,1.607,0,0,1,.5,1.173v17.311a1.607,1.607,0,0,1-.5,1.173,1.607,1.607,0,0,1-1.173.5Zm0-1.675h16.753v-12.006H121.675Zm0-13.682h16.753v-3.63H121.675Zm0,0v0Z'
        transform='translate(-120 880)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EventIcon

import * as React from 'react'

interface NotificationIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const NotificationIcon = ({
  isActive,
  color,
  colorActive
}: NotificationIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='noun-notification-1075241'
      xmlns='http://www.w3.org/2000/svg'
      width='21.841'
      height='22.125'
      viewBox='0 0 21.841 22.125'
    >
      <path
        id='Unión_2'
        data-name='Unión 2'
        d='M1.031,19.159a1.032,1.032,0,0,1-.691-1.8h0a5.963,5.963,0,0,0,1.776-3.994V8.752a8.752,8.752,0,0,1,17.5,0v4.339a5.552,5.552,0,0,0,1.824,4.223,1.034,1.034,0,0,1,.338,1.15l-.049.137h-.011a1.03,1.03,0,0,1-.915.558ZM4.183,8.752v4.613a7.386,7.386,0,0,1-1.052,3.73h15.5a7.86,7.86,0,0,1-1.073-4V8.752a6.688,6.688,0,0,0-13.376,0Z'
        transform='translate(0 0)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_5'
        data-name='Trazado 5'
        d='M302.893,446.13a.84.84,0,0,0,0,1.68h3.683a.84.84,0,0,0,0-1.68Z'
        transform='translate(-293.812 -425.685)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default NotificationIcon

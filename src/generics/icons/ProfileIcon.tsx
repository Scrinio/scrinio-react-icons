import * as React from 'react'

interface ProfileIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ProfileIcon = ({ isActive, color, colorActive }: ProfileIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='noun-person-1656171'
      xmlns='http://www.w3.org/2000/svg'
      width='25.815'
      height='26.387'
      viewBox='0 0 25.815 26.387'
    >
      <path
        id='Trazado_7166'
        data-name='Trazado 7166'
        d='M355.683,248.057a8.632,8.632,0,1,1,6.1-2.528,8.626,8.626,0,0,1-6.1,2.528Zm0-14.847a6.227,6.227,0,1,0,4.4,1.824,6.221,6.221,0,0,0-4.4-1.824Z'
        transform='translate(-342.775 -230.806)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_7167'
        data-name='Trazado 7167'
        d='M222.65,790.682a1.183,1.183,0,0,1-.774-.288,1.2,1.2,0,0,1-.141-1.694,16.964,16.964,0,0,1,25.243,0,1.2,1.2,0,0,1-1.835,1.554,14.567,14.567,0,0,0-21.573,0,1.2,1.2,0,0,1-.921.428Z'
        transform='translate(-221.448 -764.295)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ProfileIcon

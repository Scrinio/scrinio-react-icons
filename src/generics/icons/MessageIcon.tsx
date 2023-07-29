import * as React from 'react'

interface MessageIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const MessageIcon = ({ isActive, color, colorActive }: MessageIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26.855'
      height='19.182'
      viewBox='0 0 26.855 19.182'
    >
      <path
        id='noun-mesage-2131374'
        d='M131.184,106.041A2.878,2.878,0,0,0,128.978,105h-21.1A2.877,2.877,0,0,0,105,107.873V121.3a2.877,2.877,0,0,0,2.877,2.877h21.1a2.877,2.877,0,0,0,2.877-2.877V107.873A2.878,2.878,0,0,0,131.184,106.041Zm-3.04.873-9.715,6.512-9.649-6.512Zm.835,15.346h-21.1a.959.959,0,0,1-.959-.959V107.969l11.011,7.414a.9.9,0,0,0,1.036,0l10.972-7.366V121.3a.959.959,0,0,1-.959.959Z'
        transform='translate(-105 -104.996)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default MessageIcon

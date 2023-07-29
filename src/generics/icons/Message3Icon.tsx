import * as React from 'react'

interface Message3IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Message3Icon = ({ isActive, color, colorActive }: Message3IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.212'
      height='12.88'
      viewBox='0 0 17.212 12.88'
    >
      <path
        id='mail_FILL0_wght400_GRAD0_opsz48'
        d='M81.291-787.12a1.239,1.239,0,0,1-.9-.387,1.238,1.238,0,0,1-.387-.9v-10.3a1.239,1.239,0,0,1,.387-.9,1.238,1.238,0,0,1,.9-.387h14.63a1.238,1.238,0,0,1,.9.387,1.239,1.239,0,0,1,.387.9v10.3a1.238,1.238,0,0,1-.387.9,1.239,1.239,0,0,1-.9.387Zm7.315-5.607-7.315-4.8v9.114h14.63v-9.114Zm0-1.291,7.229-4.691H81.4Zm-7.315-3.507v0Z'
        transform='translate(-80 800)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Message3Icon

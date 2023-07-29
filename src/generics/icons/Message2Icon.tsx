import * as React from 'react'

interface Message2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Message2Icon = ({ isActive, color, colorActive }: Message2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21.757'
      height='17.405'
      viewBox='0 0 21.757 17.405'
    >
      <path
        id='mail_FILL0_wght400_GRAD0_opsz48'
        d='M81.632-782.595a1.565,1.565,0,0,1-1.142-.49,1.565,1.565,0,0,1-.49-1.142v-14.142a1.565,1.565,0,0,1,.49-1.142,1.565,1.565,0,0,1,1.142-.49h18.493a1.565,1.565,0,0,1,1.142.49,1.565,1.565,0,0,1,.49,1.142v14.142a1.565,1.565,0,0,1-.49,1.142,1.565,1.565,0,0,1-1.142.49Zm9.247-8.213-9.247-6.065v12.646h18.493v-12.646Zm0-1.632,9.138-5.929H81.768Zm-9.247-4.433v0Z'
        transform='translate(-80 800)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Message2Icon

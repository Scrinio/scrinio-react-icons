import * as React from 'react'

interface TopicIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const TopicIcon = ({ isActive, color, colorActive }: TopicIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27.14'
      height='22.49'
      viewBox='0 0 27.14 22.49'
    >
      <path
        id='topic_FILL0_wght400_GRAD0_opsz48'
        d='M86.939-789.106H103.1v-2.109H86.939Zm0,5.623H97.481v-2.109H86.939Zm-3.83,5.974a2,2,0,0,1-1.476-.65A2.043,2.043,0,0,1,81-779.618v-18.273a2.042,2.042,0,0,1,.633-1.458,2,2,0,0,1,1.476-.65h9.84l2.108,2.109h10.975a2.016,2.016,0,0,1,1.458.65,2.017,2.017,0,0,1,.65,1.458v16.165a2.017,2.017,0,0,1-.65,1.458,2.017,2.017,0,0,1-1.458.65Zm0-20.382v18.273h22.923v-16.165H94.178l-2.108-2.108Zm0,0v0Z'
        transform='translate(-81 800)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default TopicIcon

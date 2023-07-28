import * as React from 'react'

interface PostIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const PostIcon = ({ isActive, color, colorActive }: PostIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21.857'
      height='21.857'
      viewBox='0 0 21.857 21.857'
    >
      <path
        id='postScrinioIcon'
        d='M121.821-818.143a1.747,1.747,0,0,1-1.275-.546,1.747,1.747,0,0,1-.546-1.275v-18.215a1.748,1.748,0,0,1,.546-1.275,1.748,1.748,0,0,1,1.275-.546h18.215a1.748,1.748,0,0,1,1.275.546,1.748,1.748,0,0,1,.546,1.275v18.215a1.747,1.747,0,0,1-.546,1.275,1.747,1.747,0,0,1-1.275.546Zm0-1.821h18.215v-18.215H121.821Zm1.7-2.945h14.845l-4.463-5.95-4.007,5.191-2.823-3.855Zm-1.7,2.945v0Z'
        transform='translate(-120 840)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default PostIcon

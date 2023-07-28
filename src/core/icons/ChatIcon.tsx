import * as React from 'react'

interface ChatIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ChatIcon = ({ isActive, color, colorActive }: ChatIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24.308'
      height='24.308'
      viewBox='0 0 24.308 24.308'
    >
      <path
        id='comment_FILL0_wght400_GRAD0_opsz48'
        d='M84.862-865.416H99.446v-1.823H84.862Zm0-3.95H99.446v-1.823H84.862Zm0-3.95H99.446v-1.823H84.862Zm19.446,17.623-4.862-4.862H81.823a1.749,1.749,0,0,1-1.276-.547A1.749,1.749,0,0,1,80-862.377v-15.8a1.749,1.749,0,0,1,.547-1.276A1.749,1.749,0,0,1,81.823-880h20.662a1.749,1.749,0,0,1,1.276.547,1.749,1.749,0,0,1,.547,1.276Zm-22.485-6.685v0Zm18.413,0,2.248,2.431v-18.231H81.823v15.8Z'
        transform='translate(-80 880)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ChatIcon

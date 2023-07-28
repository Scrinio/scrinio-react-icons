import * as React from 'react'

interface ForumsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ForumsIcon = ({ isActive, color, colorActive }: ForumsIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27.223'
      height='27.188'
      viewBox='0 0 27.223 27.188'
    >
      <path
        id='forum_FILL0_wght400_GRAD0_opsz48'
        d='M86.84-858.222a1.319,1.319,0,0,1-.936-.476,1.393,1.393,0,0,1-.459-.953v-3.335h17.014v-11.569h3.4a1.267,1.267,0,0,1,.919.476,1.446,1.446,0,0,1,.442.987v20.28l-5.411-5.41ZM80-859.584v-18.987a1.415,1.415,0,0,1,.442-.953,1.267,1.267,0,0,1,.919-.476H99.022a1.312,1.312,0,0,1,.953.459,1.389,1.389,0,0,1,.442.97v12.114a1.415,1.415,0,0,1-.442.953,1.294,1.294,0,0,1-.953.476H85.445Zm18.375-7.486v-10.889H82.042v13.611l2.518-2.722Zm-16.334,0v0Z'
        transform='translate(-80 880)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ForumsIcon

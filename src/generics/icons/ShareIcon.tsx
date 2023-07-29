import * as React from 'react'

interface ShareIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ShareIcon = ({ isActive, color, colorActive }: ShareIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.731'
      height='16.048'
      viewBox='0 0 16.731 16.048'
    >
      <g
        id='Grupo_9077'
        data-name='Grupo 9077'
        transform='translate(-151.277 -0.273)'
      >
        <g id='noun-send-958226' transform='translate(151.277 0.273)'>
          <path
            id='Trazado_6496'
            data-name='Trazado 6496'
            d='M86.1,22.9l6.537,2.427L95.146,31.6a.522.522,0,0,0,.517.337.557.557,0,0,0,.517-.337l6.26-14.989a.5.5,0,0,0-.129-.567.6.6,0,0,0-.591-.124L86.1,21.907a.563.563,0,0,0-.351.5.5.5,0,0,0,.351.5Zm14.829-5.528L95.681,29.951l-1.9-4.731,2.585-2.48L95.589,22l-2.475,2.356-5.3-1.949Z'
            transform='translate(-85.746 -15.887)'
            fill={isActive ? customActiveColor : customColor}
          />
        </g>
      </g>
    </svg>
  )
}

export default ShareIcon

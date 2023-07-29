import * as React from 'react'

interface VerifiedIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const VerifiedIcon = ({ isActive, color, colorActive }: VerifiedIconProps) => {
  const defaultColor = '#1ba9f4'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12.686'
      height='12.685'
      viewBox='0 0 12.686 12.685'
    >
      <g id='noun-verified-1983696' transform='translate(-78.992 -27.935)'>
        <path
          id='Trazado_6493'
          data-name='Trazado 6493'
          d='M110.64,35.123a2.114,2.114,0,0,1,0-1.606l.07-.169a2.12,2.12,0,0,0-1.141-2.762l-.155-.07a2.063,2.063,0,0,1-1.141-1.141l-.056-.141a2.148,2.148,0,0,0-2.776-1.141l-.141.056a2.15,2.15,0,0,1-1.62,0l-.127-.056a2.127,2.127,0,0,0-2.748,1.155l-.056.113A2.063,2.063,0,0,1,99.607,30.5l-.127.056a2.125,2.125,0,0,0-1.127,2.762l.056.127a2.114,2.114,0,0,1,0,1.606l-.056.155a2.088,2.088,0,0,0,1.141,2.748l.141.056a2.063,2.063,0,0,1,1.141,1.141l.07.155a2.106,2.106,0,0,0,2.748,1.155l.155-.07a2.15,2.15,0,0,1,1.62,0l.127.056a2.12,2.12,0,0,0,2.762-1.141l.056-.113a2.063,2.063,0,0,1,1.141-1.141l.113-.042a2.1,2.1,0,0,0,1.141-2.762Zm-6.707,1.9-2.748-2.311.846-1,1.747,1.48,3.086-3.664,1,.845Z'
          transform='translate(-19.196 0)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default VerifiedIcon

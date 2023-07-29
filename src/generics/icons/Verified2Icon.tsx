import * as React from 'react'

interface Verified2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Verified2Icon = ({
  isActive,
  color,
  colorActive
}: Verified2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23.932'
      height='22.844'
      viewBox='0 0 23.932 22.844'
    >
      <path
        id='verified_FILL0_wght400_GRAD0_opsz48'
        d='M48.322-877.156l-2.067-3.535-4.107-.843.462-4L40-888.578l2.611-3.019-.462-4,4.107-.843L48.322-900l3.644,1.686L55.61-900l2.094,3.563,4.079.843-.462,4,2.611,3.019-2.611,3.046.462,4-4.079.843-2.094,3.535-3.644-1.686Zm.734-2.148,2.91-1.224,2.992,1.224,1.822-2.72,3.182-.816-.326-3.236,2.2-2.5-2.2-2.556.326-3.236-3.182-.761-1.877-2.72-2.937,1.224-2.992-1.224-1.822,2.72-3.182.761.326,3.236-2.2,2.556,2.2,2.5-.326,3.291,3.182.762ZM51.966-888.578ZM50.8-884.961l6.173-6.119-1.224-1.115-4.95,4.9-2.584-2.692-1.251,1.224Z'
        transform='translate(-40 900)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Verified2Icon

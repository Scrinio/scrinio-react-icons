import * as React from 'react'

interface ArrowRightSmallIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowRightSmallIcon = ({
  isActive,
  color,
  colorActive
}: ArrowRightSmallIconProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.408'
      height='15.849'
      viewBox='0 0 16.408 15.849'
    >
      <path
        id='Unión_29'
        data-name='Unión 29'
        d='M-7679.34,15.509a1.162,1.162,0,0,1,0-1.646l4.723-4.723h-11.218A1.164,1.164,0,0,1-7687,7.977a1.164,1.164,0,0,1,1.165-1.163h11.323l-4.827-4.829a1.159,1.159,0,0,1,0-1.644,1.159,1.159,0,0,1,.822-.341,1.16,1.16,0,0,1,.824.341l6.76,6.762a1.159,1.159,0,0,1,0,1.644l-6.76,6.762a1.164,1.164,0,0,1-.824.34A1.159,1.159,0,0,1-7679.34,15.509Z'
        transform='translate(7687)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowRightSmallIcon

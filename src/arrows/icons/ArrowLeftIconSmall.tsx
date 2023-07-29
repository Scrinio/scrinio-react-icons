import * as React from 'react'

interface ArrowLeftIconSmallProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowLeftIconSmall = ({
  isActive,
  color,
  colorActive
}: ArrowLeftIconSmallProps) => {
  const defaultColor = '#FFF'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.406'
      height='15.849'
      viewBox='0 0 16.406 15.849'
    >
      <path
        id='Unión_96'
        data-name='Unión 96'
        d='M-7678.254,15.509a1.162,1.162,0,0,0,0-1.646l-4.723-4.723h11.217a1.164,1.164,0,0,0,1.165-1.163,1.164,1.164,0,0,0-1.165-1.163h-11.322l4.827-4.829a1.16,1.16,0,0,0,0-1.644,1.16,1.16,0,0,0-.822-.341,1.159,1.159,0,0,0-.823.341l-6.76,6.762a1.16,1.16,0,0,0,0,1.644l6.76,6.762a1.165,1.165,0,0,0,.823.34A1.159,1.159,0,0,0-7678.254,15.509Z'
        transform='translate(7687.001)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ArrowLeftIconSmall

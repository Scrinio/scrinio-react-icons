import * as React from 'react'

interface EventMsg2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EventMsg2Icon = ({
  isActive,
  color,
  colorActive
}: EventMsg2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18.834'
      height='18.834'
      viewBox='0 0 18.834 18.834'
    >
      <path
        id='sms_FILL0_wght400_GRAD0_opsz48'
        d='M85.32,184.4a.925.925,0,1,0-.671-.271A.911.911,0,0,0,85.32,184.4Zm4.167,0a.925.925,0,1,0-.671-.271A.911.911,0,0,0,89.487,184.4Zm4,0a.925.925,0,1,0-.671-.271A.911.911,0,0,0,93.49,184.4ZM80,194.834V177.413a1.368,1.368,0,0,1,.424-.977,1.338,1.338,0,0,1,.989-.436H97.421a1.494,1.494,0,0,1,1.413,1.412v12.242a1.494,1.494,0,0,1-1.413,1.413H83.767Zm1.413-3.414,1.766-1.766H97.421V177.413H81.413Zm0-14.008v0Z'
        transform='translate(-80 -176)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EventMsg2Icon

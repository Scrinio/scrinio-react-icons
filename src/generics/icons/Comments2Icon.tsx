import * as React from 'react'

interface Comments2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Comments2Icon = ({
  isActive,
  color,
  colorActive
}: Comments2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20.951'
      height='20.951'
      viewBox='0 0 20.951 20.951'
    >
      <path
        id='sms_FILL0_wght400_GRAD0_opsz48'
        d='M80-858.049v-19.319a1.565,1.565,0,0,1,.49-1.142,1.565,1.565,0,0,1,1.142-.49H99.319a1.565,1.565,0,0,1,1.142.49,1.565,1.565,0,0,1,.49,1.142v13.336a1.566,1.566,0,0,1-.49,1.142,1.565,1.565,0,0,1-1.142.49H84.351Zm3.644-5.983H99.319v-13.336H81.632v15.512Zm-2.012,0v0Z'
        transform='translate(-80 879)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Comments2Icon

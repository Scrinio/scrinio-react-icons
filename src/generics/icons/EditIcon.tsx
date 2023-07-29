import * as React from 'react'

interface EditIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EditIcon = ({ isActive, color, colorActive }: EditIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24.367'
      height='24.397'
      viewBox='0 0 24.367 24.397'
    >
      <path
        id='edit_square_FILL0_wght400_GRAD0_opsz48'
        d='M121.766-816.6a1.694,1.694,0,0,1-1.236-.53,1.694,1.694,0,0,1-.53-1.236v-17.657a1.694,1.694,0,0,1,.53-1.236,1.694,1.694,0,0,1,1.236-.53h11.919l-1.766,1.766H121.766v17.657h17.657V-828.61l1.766-1.766v12.007a1.694,1.694,0,0,1-.53,1.236,1.694,1.694,0,0,1-1.236.53ZM130.594-827.2Zm5.356-10.359,1.265,1.236-8.387,8.358v2.531h2.5l8.417-8.417,1.236,1.236-8.917,8.946h-5v-5Zm5.032,4.944-5.032-4.944,2.943-2.943a1.69,1.69,0,0,1,1.245-.5,1.678,1.678,0,0,1,1.256.53l2.472,2.5a1.76,1.76,0,0,1,.5,1.25,1.62,1.62,0,0,1-.53,1.222Z'
        transform='translate(-120 841)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EditIcon

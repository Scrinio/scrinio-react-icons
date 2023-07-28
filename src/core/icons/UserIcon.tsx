import * as React from 'react'

interface UserIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const UserIcon = ({ isActive, color, colorActive }: UserIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15.298'
      height='18.707'
      viewBox='0 0 15.298 18.707'
    >
      <g id='userScrinioIcon' data-name='Grupo 7566' transform='translate(0 0)'>
        <path
          id='Trazado_296'
          data-name='Trazado 296'
          d='M-1067.583-200.652a4.589,4.589,0,0,1-4.62-4.784,4.653,4.653,0,0,1,4.658-4.558,4.692,4.692,0,0,1,4.678,4.78A4.613,4.613,0,0,1-1067.583-200.652Zm-2.916-4.607a2.929,2.929,0,0,0,3.05,2.926,2.961,2.961,0,0,0,2.873-3.043,2.978,2.978,0,0,0-3.029-2.9A2.943,2.943,0,0,0-1070.5-205.259Z'
          transform='translate(1075.184 209.993)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_297'
          data-name='Trazado 297'
          d='M-1093.005-131.428a7.66,7.66,0,0,1,4.737-6.694,7.67,7.67,0,0,1,10.56,6.9c.018.593-.271.971-.774,1.012-.558.045-.871-.25-.921-.928a6,6,0,0,0-2.151-4.44,5.64,5.64,0,0,0-6.1-.916,5.654,5.654,0,0,0-3.635,5.138c-.058.847-.379,1.23-1.019,1.14C-1092.826-130.287-1093.02-130.627-1093.005-131.428Z'
          transform='translate(1093.006 148.908)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default UserIcon

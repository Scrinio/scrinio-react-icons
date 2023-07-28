import * as React from 'react'

interface SurveyIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const SurveyIcon = ({ isActive, color, colorActive }: SurveyIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22.371'
      height='18.224'
      viewBox='0 0 22.371 18.224'
    >
      <g id='Grupo_8717' data-name='Grupo 8717' transform='translate(-1 0)'>
        <path
          id='Trazado_25571'
          data-name='Trazado 25571'
          d='M12.374-1.47h-15.8c-.595,0-1.077-.678-1.077-1.515S-4.018-4.5-3.423-4.5h15.8c.595,0,1.077.678,1.077,1.515S12.969-1.47,12.374-1.47Z'
          transform='translate(9.92 4.5)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25571-2'
          data-name='Trazado 25571'
          d='M12.374-1.47h-15.8c-.595,0-1.077-.678-1.077-1.515S-4.018-4.5-3.423-4.5h15.8c.595,0,1.077.678,1.077,1.515S12.969-1.47,12.374-1.47Z'
          transform='translate(9.92 12.243)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25571-3'
          data-name='Trazado 25571'
          d='M12.374-1.47h-15.8c-.595,0-1.077-.678-1.077-1.515S-4.018-4.5-3.423-4.5h15.8c.595,0,1.077.678,1.077,1.515S12.969-1.47,12.374-1.47Z'
          transform='translate(9.92 19.651)'
          fill={isActive ? customActiveColor : customColor}
        />
        <ellipse
          id='Elipse_362'
          data-name='Elipse 362'
          cx='1.62'
          cy='1.388'
          rx='1.62'
          ry='1.388'
          transform='translate(1 0.176)'
          fill={isActive ? customActiveColor : customColor}
        />
        <ellipse
          id='Elipse_363'
          data-name='Elipse 363'
          cx='1.62'
          cy='1.62'
          rx='1.62'
          ry='1.62'
          transform='translate(1 7.58)'
          fill={isActive ? customActiveColor : customColor}
        />
        <ellipse
          id='Elipse_364'
          data-name='Elipse 364'
          cx='1.62'
          cy='1.62'
          rx='1.62'
          ry='1.62'
          transform='translate(1 14.984)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default SurveyIcon

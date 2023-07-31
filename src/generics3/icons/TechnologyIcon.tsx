import * as React from 'react'

interface TechnologyIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const TechnologyIcon = ({
  isActive,
  color,
  colorActive
}: TechnologyIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='52.411'
      height='29'
      viewBox='0 0 52.411 29'
    >
      <g
        id='Grupo_6184'
        data-name='Grupo 6184'
        transform='translate(-37.693 -287.603)'
      >
        <g
          id='Grupo_6183'
          data-name='Grupo 6183'
          transform='translate(37.693 287.603)'
        >
          <g
            id='Grupo_6180'
            data-name='Grupo 6180'
            transform='translate(36.645 0.073)'
          >
            <path
              id='Trazado_4455'
              data-name='Trazado 4455'
              d='M-203.034,3515.894a1.613,1.613,0,0,1-1.145-.475,1.618,1.618,0,0,1,0-2.289l11.383-11.385-11.383-11.384a1.618,1.618,0,0,1,0-2.289,1.619,1.619,0,0,1,2.289,0l12.528,12.529a1.618,1.618,0,0,1,0,2.289l-12.528,12.528A1.612,1.612,0,0,1-203.034,3515.894Z'
              transform='translate(204.653 -3487.599)'
              fill={isActive ? customActiveColor : customColor}
            />
          </g>
          <g
            id='Grupo_6181'
            data-name='Grupo 6181'
            transform='translate(0 0.072)'
          >
            <path
              id='Trazado_4456'
              data-name='Trazado 4456'
              d='M-276.865,3487.6a1.612,1.612,0,0,1,1.145.475,1.618,1.618,0,0,1,0,2.289l-11.383,11.384,11.383,11.385a1.618,1.618,0,0,1,0,2.289,1.619,1.619,0,0,1-2.289,0l-12.528-12.529a1.618,1.618,0,0,1,0-2.289l12.528-12.528A1.613,1.613,0,0,1-276.865,3487.6Z'
              transform='translate(291.011 -3487.599)'
              fill={isActive ? customActiveColor : customColor}
            />
          </g>
          <g
            id='Grupo_6182'
            data-name='Grupo 6182'
            transform='translate(18.314)'
          >
            <path
              id='Trazado_4457'
              data-name='Trazado 4457'
              d='M-232.515,3489.841l-12.108,25.625a1.7,1.7,0,0,1-2.255.8,1.7,1.7,0,0,1-.814-2.25l12.108-25.624a1.7,1.7,0,0,1,2.255-.8A1.7,1.7,0,0,1-232.515,3489.841Z'
              transform='translate(247.852 -3487.428)'
              fill={isActive ? customActiveColor : customColor}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default TechnologyIcon

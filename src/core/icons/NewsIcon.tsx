import * as React from 'react'

interface NewsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const NewsIcon = ({ isActive, color, colorActive }: NewsIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.537'
      height='22.981'
      viewBox='0 0 19.537 22.981'
    >
      <g
        id='newsScrinioIcon'
        data-name='Grupo 8960'
        transform='translate(0.001)'
      >
        <path
          id='Trazado_25495'
          data-name='Trazado 25495'
          d='M.321-1H17.216A1.225,1.225,0,0,1,18.537.093V20.887a1.226,1.226,0,0,1-1.322,1.093H.321A1.225,1.225,0,0,1-1,20.888V.093A1.225,1.225,0,0,1,.321-1ZM17.2.156H.334V20.824H17.2Z'
          transform='translate(0.999 1)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25623'
          data-name='Trazado 25623'
          d='M9.394.631H-.035A.665.665,0,0,1-.7-.034.665.665,0,0,1-.035-.7H9.394a.665.665,0,0,1,.665.666A.665.665,0,0,1,9.394.631Z'
          transform='translate(5.088 11.525)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25623-2'
          data-name='Trazado 25623'
          d='M9.394.631H-.035A.665.665,0,0,1-.7-.034.665.665,0,0,1-.035-.7H9.394a.665.665,0,0,1,.665.666A.665.665,0,0,1,9.394.631Z'
          transform='translate(5.088 8.096)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25625'
          data-name='Trazado 25625'
          d='M9.394.631H-.035A.665.665,0,0,1-.7-.034.665.665,0,0,1-.035-.7H9.394a.665.665,0,0,1,.665.666A.665.665,0,0,1,9.394.631Z'
          transform='translate(5.088 18.382)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_25624'
          data-name='Trazado 25624'
          d='M9.394.631H-.035A.665.665,0,0,1-.7-.034.665.665,0,0,1-.035-.7H9.394a.665.665,0,0,1,.665.666A.665.665,0,0,1,9.394.631Z'
          transform='translate(5.088 14.953)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default NewsIcon

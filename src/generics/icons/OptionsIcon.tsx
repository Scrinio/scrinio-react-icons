import * as React from 'react'

interface OptionsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const OptionsIcon = ({ isActive, color, colorActive }: OptionsIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Componente_280_14'
      data-name='Componente 280 – 14'
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='6'
      viewBox='0 0 26 6'
    >
      <circle
        id='Elipse_461'
        data-name='Elipse 461'
        cx='3'
        cy='3'
        r='3'
        fill={isActive ? customActiveColor : customColor}
      />
      <circle
        id='Elipse_462'
        data-name='Elipse 462'
        cx='3'
        cy='3'
        r='3'
        transform='translate(10)'
        fill={isActive ? customActiveColor : customColor}
      />
      <circle
        id='Elipse_463'
        data-name='Elipse 463'
        cx='3'
        cy='3'
        r='3'
        transform='translate(20)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default OptionsIcon

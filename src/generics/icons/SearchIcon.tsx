import * as React from 'react'

interface SearchIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const SearchIcon = ({ isActive, color, colorActive }: SearchIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20.506'
      height='20.595'
      viewBox='0 0 20.506 20.595'
    >
      <g id='Grupo_8989' data-name='Grupo 8989' transform='translate(-3.201)'>
        <path
          id='Trazado_16'
          data-name='Trazado 16'
          d='M-686.177,1360.241c2.484,2.459.84.922,3.3,3.357a7.334,7.334,0,0,1,.607.636,1.374,1.374,0,0,1,.048,1.782,4.872,4.872,0,0,1-.941.916,1.306,1.306,0,0,1-1.7-.055,5.819,5.819,0,0,1-.582-.535c-2.288-2.276-.472-.579-2.753-2.862a6.714,6.714,0,0,1-.542-.7,9.162,9.162,0,0,1-7.728.971,8.542,8.542,0,0,1-4.6-3.635,8.811,8.811,0,0,1,1.634-11.28,8.821,8.821,0,0,1,11.039-.515C-685.407,1350.5-683.35,1355.109-686.177,1360.241Zm-.851-4.879a6.506,6.506,0,0,0-6.585-6.507,6.535,6.535,0,0,0-6.576,6.608A6.641,6.641,0,0,0-693.6,1362,6.654,6.654,0,0,0-687.028,1355.362Z'
          transform='translate(705.627 -1346.626)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default SearchIcon

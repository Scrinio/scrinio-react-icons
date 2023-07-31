import * as React from 'react'

interface CourseIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const CourseIcon = ({ isActive, color, colorActive }: CourseIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='37.147'
      height='40.585'
      viewBox='0 0 37.147 40.585'
    >
      <path
        id='Trazado_4423'
        data-name='Trazado 4423'
        d='M154.12,75.712a4.535,4.535,0,0,0,4.771,4.243h29.265a2.958,2.958,0,0,0,3.111-2.767V48.678a2.958,2.958,0,0,0-3.111-2.767h-.377V42.137a2.958,2.958,0,0,0-3.111-2.767H158.891a5.08,5.08,0,0,0-3.358,1.231,3.926,3.926,0,0,0-1.413,2.961c0,.058,0,.115,0,.172,0,.026,0,.053,0,.079Zm4.771-34.5h25.777a.986.986,0,0,1,1.037.922v3.774H158.89a2.513,2.513,0,0,1-2.7-2.348,2.575,2.575,0,0,1,2.7-2.348Zm4.752,6.541h9.051V62.177l-3.848-2.954a1.137,1.137,0,0,0-1.355,0l-3.848,2.954Zm-7.448-.714a5.277,5.277,0,0,0,2.7.714h2.678V62.982a1.461,1.461,0,0,0,.969,1.342,1.8,1.8,0,0,0,1.775-.225l3.856-2.96,3.856,2.96a1.769,1.769,0,0,0,1.079.361,1.845,1.845,0,0,0,.7-.136,1.462,1.462,0,0,0,.969-1.342V47.756h13.388a.986.986,0,0,1,1.037.922v28.51a.986.986,0,0,1-1.037.922H158.891a2.564,2.564,0,0,1-2.7-2.4Z'
        transform='translate(-154.12 -39.37)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default CourseIcon

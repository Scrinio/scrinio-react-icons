import * as React from 'react'

interface EducationIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EducationIcon = ({
  isActive,
  color,
  colorActive
}: EducationIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='_006-graduation_cap'
      data-name='006-graduation cap'
      xmlns='http://www.w3.org/2000/svg'
      width='53.289'
      height='41.852'
      viewBox='0 0 53.289 41.852'
    >
      <path
        id='Trazado_8109'
        data-name='Trazado 8109'
        d='M53.289,70.854V68.059L26.645,54.943,0,68.059v2.795l7.234,3.561V87.924c.538.733,6.336,5.888,19.411,5.888a40.977,40.977,0,0,0,8.994-.937,7.238,7.238,0,0,0,6.426,3.92h5.882V91.608a7.2,7.2,0,0,0-1.891-4.871V74.415Zm-18.457,19a38.842,38.842,0,0,1-8.188.837A33,33,0,0,1,13.795,88.4a17.164,17.164,0,0,1-3.439-1.889V75.952L26.645,83.97l8.188-4.031Zm9.992,3.82H42.065a4.115,4.115,0,0,1-4.11-4.11V87.5h2.759a4.115,4.115,0,0,1,4.11,4.11Zm-6.869-9.3V78.4l4.979-2.451v8.773a7.2,7.2,0,0,0-2.219-.35Zm0-9.453V67.9H26.645v3.122h8.188V76.46L26.645,80.49,4.231,69.457,26.645,58.423,49.058,69.457Z'
        transform='translate(0 -54.943)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EducationIcon

import * as React from 'react'

interface AttachIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const AttachIcon = ({ isActive, color, colorActive }: AttachIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22.222'
      height='22.222'
      viewBox='0 0 22.222 22.222'
    >
      <path
        id='Trazado_6023'
        data-name='Trazado 6023'
        d='M9.3,12.821a.591.591,0,0,0,.835.835L15.3,8.488A4.975,4.975,0,0,0,8.268,1.453L1.034,8.687A3.513,3.513,0,1,0,6,13.655l7.233-7.233a2.051,2.051,0,0,0-2.9-2.9L5.167,8.688A.59.59,0,0,0,6,9.523l5.167-5.167A.871.871,0,1,1,12.4,5.587L5.167,12.82a2.332,2.332,0,1,1-3.3-3.3L9.1,2.288a3.794,3.794,0,0,1,5.365,5.365L9.3,12.821Z'
        transform='translate(-0.005 11.847) rotate(-45)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default AttachIcon

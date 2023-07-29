import * as React from 'react'

interface LikeIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const LikeIcon = ({ isActive, color, colorActive }: LikeIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18.826'
      height='14.918'
      viewBox='0 0 18.826 14.918'
    >
      <g id='noun-heart-29320' transform='translate(0 0)'>
        <path
          id='Trazado_6494'
          data-name='Trazado 6494'
          d='M117.821,78.611a3.572,3.572,0,0,1,2.476.981,3.253,3.253,0,0,1,0,4.746l-3.887,3.717-.793.759-2.481,2.373-2.481-2.373-.793-.759-3.887-3.718a3.254,3.254,0,0,1,0-4.746,3.573,3.573,0,0,1,2.476-.981,3.618,3.618,0,0,1,2.026.614l-.014-.013.2.144.009.007c.628.457,2.465,1.837,2.465,2.333,0-.5,1.837-1.876,2.465-2.333l.009-.007c.124-.09.2-.144.2-.144l-.014.013a3.62,3.62,0,0,1,2.026-.614m0-1.17a4.86,4.86,0,0,0-2.624.758,1.212,1.212,0,0,0-.114.071s-.075.053-.2.143l-.043.032c-.739.539-1.293.982-1.708,1.354q-.084-.075-.174-.153c-.563-.486-1.2-.962-1.537-1.207l-.026-.019c-.129-.094-.207-.149-.207-.149a1.205,1.205,0,0,0-.114-.072,4.862,4.862,0,0,0-2.625-.759,4.8,4.8,0,0,0-3.341,1.324,4.388,4.388,0,0,0,0,6.4L109,88.884l.794.759,2.481,2.373a1.264,1.264,0,0,0,1.731,0l2.48-2.374.793-.758,3.887-3.718a4.388,4.388,0,0,0,0-6.4,4.8,4.8,0,0,0-3.341-1.323Z'
          transform='translate(-103.722 -77.441)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default LikeIcon

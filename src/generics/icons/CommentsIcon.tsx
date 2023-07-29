import * as React from 'react'

interface CommentsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const CommentsIcon = ({ isActive, color, colorActive }: CommentsIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.47'
      height='16.321'
      viewBox='0 0 17.47 16.321'
    >
      <g id='noun-comment-3460451' transform='translate(0 0)'>
        <path
          id='Trazado_6495'
          data-name='Trazado 6495'
          d='M172.456,92.52H159.692a2.31,2.31,0,0,0-2.353,2.259v8.154a2.31,2.31,0,0,0,2.353,2.259h6.14l4.065,3.494a.649.649,0,0,0,.423.156h.005a.622.622,0,0,0,.635-.609.577.577,0,0,0-.011-.111l-.17-2.928h1.678a2.31,2.31,0,0,0,2.353-2.259V94.778a2.31,2.31,0,0,0-2.353-2.258Zm1.083,10.412a1.063,1.063,0,0,1-1.083,1.04h-2.349a.647.647,0,0,0-.461.191.6.6,0,0,0-.173.453l.127,2.179-3.1-2.667a.649.649,0,0,0-.423-.156h-6.382a1.063,1.063,0,0,1-1.083-1.04V94.778a1.063,1.063,0,0,1,1.083-1.04h12.765a1.063,1.063,0,0,1,1.083,1.04Z'
          transform='translate(-157.339 -92.52)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default CommentsIcon

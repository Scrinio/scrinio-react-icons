import * as React from 'react'

interface EventUserIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EventUserIcon = ({
  isActive,
  color,
  colorActive
}: EventUserIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
    >
      <path
        id='Unión_53'
        data-name='Unión 53'
        d='M-8955.607-1673a.458.458,0,0,1-.438-.323.455.455,0,0,1,.184-.509A2.6,2.6,0,0,0-8954.7-1676v-.634h-5.479a1.825,1.825,0,0,1-1.826-1.818v-12.727a1.825,1.825,0,0,1,1.826-1.819h17.349a1.824,1.824,0,0,1,1.825,1.819v12.727a1.824,1.824,0,0,1-1.825,1.818h-5.479v.634a2.6,2.6,0,0,0,1.167,2.171.454.454,0,0,1,.185.509.459.459,0,0,1-.437.323Zm1.825-3a3.5,3.5,0,0,1-.693,2.094h5.951a3.5,3.5,0,0,1-.693-2.094v-.634h-4.564Zm-7.3-2.452a.912.912,0,0,0,.913.909h17.349a.912.912,0,0,0,.913-.909v-1.819h-19.175Zm17.8-12.728v10h1.37v-10a.913.913,0,0,0-.913-.909h-17.349a.913.913,0,0,0-.913.909v10h1.369V-1683h1.827v-1.818h2.739v3.636h1.369v-3.636h1.826v-1.819h2.738v5.455h1.37v-8.182h1.825v-1.819Zm-1.825,10h.912v-9.091h-.912Zm-1.827,0h.912v-7.273h-.912Zm-4.108,0h.913v-4.545h-.913Zm-1.827,0h.914v-2.728h-.914Zm-4.107-1.819v1.819h.912v-2.728h-.912Zm-1.827,1.819h.914v-.909h-.914Z'
        transform='translate(8962 1693.001)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EventUserIcon

import * as React from 'react'

interface ArrowFatFlowIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ArrowFatFlowIcon = ({
  isActive,
  color,
  colorActive
}: ArrowFatFlowIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23.37'
      height='23.369'
      viewBox='0 0 23.37 23.369'
    >
      <path
        id='noun-send-5432708'
        d='M93.3,25.689a2.357,2.357,0,0,1,3.388-2.12l18.427,8.965a2.76,2.76,0,0,1,0,4.964L96.691,46.463a2.357,2.357,0,0,1-3.388-2.12,2.05,2.05,0,0,1,.047-.611l2.124-6.9a1.062,1.062,0,0,1,.758-.718l4.376-1.094-4.376-1.094a1.062,1.062,0,0,1-.758-.718L93.35,26.3a2.05,2.05,0,0,1-.047-.611Zm2.357-.233a.233.233,0,0,0-.233.233v.139l1.9,6.179,7.916,1.979a1.062,1.062,0,0,1,0,2.061l-7.916,1.979-1.9,6.179v.139a.233.233,0,0,0,.335.209l18.427-8.965a.636.636,0,0,0,0-1.143L95.762,25.479a.232.232,0,0,0-.1-.023Z'
        transform='translate(-93.301 -23.332)'
        fill={isActive ? customActiveColor : customColor}
        fillRule='evenodd'
      />
    </svg>
  )
}

export default ArrowFatFlowIcon

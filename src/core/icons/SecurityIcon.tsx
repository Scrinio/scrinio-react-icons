import * as React from 'react'

interface SecurityIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const SecurityIcon = ({ isActive, color, colorActive }: SecurityIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21.303'
      height='26.629'
      viewBox='0 0 21.303 26.629'
    >
      <path
        id='security_FILL0_wght400_GRAD0_opsz48'
        d='M170.652-853.371A13.072,13.072,0,0,1,163-858.78a15.788,15.788,0,0,1-3-9.3v-7.922L170.652-880l10.652,3.994v7.922a15.788,15.788,0,0,1-3,9.3A13.072,13.072,0,0,1,170.652-853.371Zm0-2.064a11.736,11.736,0,0,0,5.842-4.277,13.878,13.878,0,0,0,2.713-6.974h-8.555v-11.151L162-874.608v6.524q0,.4.017.682t.083.716h8.555Z'
        transform='translate(-160 880)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default SecurityIcon

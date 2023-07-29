import * as React from 'react'

interface ActiveAccountsIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ActiveAccountsIcon = ({
  isActive,
  color,
  colorActive
}: ActiveAccountsIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20.033'
      height='20.033'
      viewBox='0 0 20.033 20.033'
    >
      <path
        id='account_balance_FILL0_wght400_GRAD0_opsz48'
        d='M82.711-904.238V-911.7h1.635v7.467Zm7.6,0V-911.7h1.635v7.467Zm-8.421,3.271V-902.6h18.259v1.635Zm15.8-3.271V-911.7h1.635v7.467ZM81-913.34v-1.445L91.016-921l10.016,6.215v1.445Zm2.766-1.635h0Zm0,0h14.5l-7.251-4.143Z'
        transform='translate(-81 921)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ActiveAccountsIcon

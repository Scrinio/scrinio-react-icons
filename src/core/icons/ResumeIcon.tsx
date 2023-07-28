import * as React from 'react'

interface ResumeIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ResumeIcon = ({ isActive, color, colorActive }: ResumeIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.387'
      height='23.422'
      viewBox='0 0 19.387 23.422'
    >
      <g id='resumeScrinioIcon' transform='translate(0 0)'>
        <path
          id='Trazado_6561'
          data-name='Trazado 6561'
          d='M237.306,114.673a3.748,3.748,0,1,0-3.291,0,6.036,6.036,0,0,0-4.381,5.8v2.051a.548.548,0,0,0,.548.548H241.14a.548.548,0,0,0,.548-.548v-2.051a6.037,6.037,0,0,0-4.382-5.8Zm-4.3-3.362a2.656,2.656,0,1,1,.778,1.875,2.653,2.653,0,0,1-.778-1.875Zm7.585,10.663h-1.105v-1.5a.548.548,0,1,0-1.1,0v1.5h-5.463v-1.5a.548.548,0,1,0-1.1,0v1.5h-1.105v-1.5a4.932,4.932,0,1,1,9.863,0Z'
          transform='translate(-225.967 -102.974)'
          fill={isActive ? customActiveColor : customColor}
        />
        <path
          id='Trazado_6562'
          data-name='Trazado 6562'
          d='M167.327,23.495c0-.016-.007-.033-.011-.049a.48.48,0,0,0-.015-.049c-.006-.017-.014-.033-.021-.049a.281.281,0,0,0-.023-.042h0a.482.482,0,0,0-.033-.046c-.007-.008-.011-.017-.018-.025l-3.934-4.453-.011-.01a.525.525,0,0,0-.041-.038l-.037-.031a.487.487,0,0,0-.042-.026.492.492,0,0,0-.046-.025c-.015-.007-.03-.011-.045-.016h0L163,18.619a.441.441,0,0,0-.045-.007h0a.507.507,0,0,0-.058-.006l-.015,0H150.153a2.206,2.206,0,0,0-2.2,2.2V39.823a2.206,2.206,0,0,0,2.2,2.2h14.979a2.206,2.206,0,0,0,2.2-2.2V23.581c0-.011,0-.021,0-.031a.467.467,0,0,0-.006-.056ZM163.4,20.516l2.244,2.541H163.4Zm2.883,19.307h0a1.156,1.156,0,0,1-1.154,1.154H150.153A1.156,1.156,0,0,1,149,39.823V20.809a1.156,1.156,0,0,1,1.154-1.154h12.2v3.927a.525.525,0,0,0,.525.525h3.408Z'
          transform='translate(-147.949 -18.605)'
          fill={isActive ? customActiveColor : customColor}
        />
      </g>
    </svg>
  )
}

export default ResumeIcon

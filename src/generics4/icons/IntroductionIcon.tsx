import * as React from 'react'

interface IntroductionIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const IntroductionIcon = ({
  isActive,
  color,
  colorActive
}: IntroductionIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='65.608'
      height='65.607'
      viewBox='0 0 65.608 65.607'
    >
      <path
        id='ballot_FILL0_wght300_GRAD0_opsz48'
        d='M170.905,260.715h20.514v-4.379H170.905Zm0,20.521h20.514v-4.379H170.905ZM160.371,262.8a4.256,4.256,0,1,0,0-8.512,4.067,4.067,0,0,0-3.012,1.251,4.275,4.275,0,0,0,0,6.01A4.068,4.068,0,0,0,160.371,262.8Zm0,20.521a4.256,4.256,0,1,0,0-8.512,4.066,4.066,0,0,0-3.012,1.251,4.275,4.275,0,0,0,0,6.01A4.068,4.068,0,0,0,160.371,283.321Zm-14.8,18.287A5.628,5.628,0,0,1,140,296.041V241.567A5.628,5.628,0,0,1,145.567,236h54.476a5.628,5.628,0,0,1,5.566,5.566v54.474a5.628,5.628,0,0,1-5.566,5.566Zm0-4.379h54.476a1.277,1.277,0,0,0,1.188-1.188V241.567a1.277,1.277,0,0,0-1.188-1.188H145.567a1.277,1.277,0,0,0-1.188,1.188v54.474a1.277,1.277,0,0,0,1.188,1.188ZM144.38,240.38v0Z'
        transform='translate(-140.001 -236.001)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default IntroductionIcon

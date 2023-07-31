import * as React from 'react'

interface EditSurveyIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const EditSurveyIcon = ({
  isActive,
  color,
  colorActive
}: EditSurveyIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='65.608'
      height='65.606'
      viewBox='0 0 65.608 65.606'
    >
      <path
        id='list_alt_FILL0_wght300_GRAD0_opsz48'
        d='M156.183,286.779a2.716,2.716,0,1,0-1.915-.794A2.6,2.6,0,0,0,156.183,286.779Zm0-15.266a2.716,2.716,0,1,0-1.915-.794A2.6,2.6,0,0,0,156.183,271.513Zm0-15.266a2.716,2.716,0,1,0-1.915-.794A2.6,2.6,0,0,0,156.183,256.247Zm12.585,30.013h22.243v-4.379H168.768Zm0-15.266h22.243v-4.379H168.768Zm0-15.266h22.243v-4.379H168.768Zm-23.2,45.88A5.628,5.628,0,0,1,140,296.041V241.567A5.628,5.628,0,0,1,145.567,236h54.475a5.628,5.628,0,0,1,5.566,5.566v54.474a5.628,5.628,0,0,1-5.566,5.566Zm0-4.379h54.475a1.277,1.277,0,0,0,1.188-1.188V241.567a1.277,1.277,0,0,0-1.188-1.188H145.567a1.277,1.277,0,0,0-1.188,1.188v54.474a1.277,1.277,0,0,0,1.188,1.188ZM144.38,240.38v0Z'
        transform='translate(-140.001 -236.001)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default EditSurveyIcon

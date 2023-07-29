import * as React from 'react'

interface Phone2IconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const Phone2Icon = ({ isActive, color, colorActive }: Phone2IconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.035'
      height='16.036'
      viewBox='0 0 16.035 16.036'
    >
      <path
        id='call_FILL0_wght400_GRAD0_opsz48'
        d='M135.033-823.964a12.013,12.013,0,0,1-5.4-1.336,18.337,18.337,0,0,1-4.822-3.474,18.337,18.337,0,0,1-3.474-4.822A12.014,12.014,0,0,1,120-839a.971.971,0,0,1,.286-.716A.971.971,0,0,1,121-840h3.118a.793.793,0,0,1,.541.212.973.973,0,0,1,.3.568l.6,2.806a1.6,1.6,0,0,1-.011.568.858.858,0,0,1-.234.434l-2.227,2.249a18.489,18.489,0,0,0,2.8,3.608,15.449,15.449,0,0,0,3.508,2.606l2.116-2.183a1.232,1.232,0,0,1,.512-.345,1.029,1.029,0,0,1,.579-.033l2.65.579a.985.985,0,0,1,.56.338.938.938,0,0,1,.219.619v3.007a.971.971,0,0,1-.286.716A.971.971,0,0,1,135.033-823.964Zm-12.605-10.423,1.8-1.826-.512-2.45h-2.383a7.667,7.667,0,0,0,.267,1.9A17.949,17.949,0,0,0,122.428-834.388Zm8.218,8.085a11.125,11.125,0,0,0,1.982.69,10.45,10.45,0,0,0,2.071.312v-2.383l-2.294-.468ZM122.428-834.388ZM130.646-826.3Z'
        transform='translate(-120 840)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default Phone2Icon

import * as React from 'react'

interface GraduateIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const GraduateIcon = ({ isActive, color, colorActive }: GraduateIconProps) => {
  const defaultColor = '#707070'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='noun-teacher-2812536'
      xmlns='http://www.w3.org/2000/svg'
      width='33.598'
      height='39.933'
      viewBox='0 0 33.598 49.933'
    >
      <path
        id='Trazado_6692'
        data-name='Trazado 6692'
        d='M208.489,102.872a.736.736,0,0,1-.729-.729V94.721a.646.646,0,0,1,.53-.663l14.181-4.44a6.556,6.556,0,0,1,3.91,0L240.5,93.992a1.274,1.274,0,0,1,.862,1.193,1.213,1.213,0,0,1-.862,1.193l-14.181,4.44a6.557,6.557,0,0,1-3.91,0L211.14,97.305a.734.734,0,0,1,.464-1.392l11.332,3.578a4.8,4.8,0,0,0,3.049,0l13.651-4.307-13.718-4.241a4.8,4.8,0,0,0-3.049,0L209.218,95.25v6.958a.726.726,0,0,1-.729.663Z'
        transform='translate(-207.76 -89.32)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_6693'
        data-name='Trazado 6693'
        d='M264.383,163.053a24.268,24.268,0,0,1-9.874-2.121,2.31,2.31,0,0,1-1.392-2.121v-5.765a.729.729,0,0,1,1.458,0v5.766a1.034,1.034,0,0,0,.53.862,22.644,22.644,0,0,0,18.555,0,.888.888,0,0,0,.53-.862v-5.765a.729.729,0,1,1,1.458,0v5.765a2.311,2.311,0,0,1-1.392,2.121,23.233,23.233,0,0,1-9.874,2.12Z'
        transform='translate(-247.75 -144.862)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_6694'
        data-name='Trazado 6694'
        d='M418.326,352.52a.736.736,0,0,1-.729-.729v-7.555l-7.356-6.362a.7.7,0,1,1,.928-1.06l7.621,6.494a.818.818,0,0,1,.265.53v7.952a.7.7,0,0,1-.729.729Z'
        transform='translate(-386.053 -307.358)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_6695'
        data-name='Trazado 6695'
        d='M210.729,350.546a.736.736,0,0,1-.729-.729v-7.952a.6.6,0,0,1,.265-.53l7.621-6.759a.7.7,0,1,1,.928,1.06l-7.356,6.561v7.621a.7.7,0,0,1-.729.729Z'
        transform='translate(-209.735 -305.384)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_6696'
        data-name='Trazado 6696'
        d='M272.287,252.867c-5.633,0-10.205-5.566-10.205-12.458a.729.729,0,1,1,1.458,0c0,6.1,3.91,11,8.748,11s8.748-4.97,8.748-11a.729.729,0,0,1,1.458,0c0,6.826-4.573,12.458-10.206,12.458Z'
        transform='translate(-255.654 -221.887)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_6698'
        data-name='Trazado 6698'
        d='M308.527,380.135l-5.566-6.693,3.446-10.4a.734.734,0,1,1,1.392.464l-3.248,9.609,3.976,4.771,3.976-4.771-2.783-9.675a.692.692,0,1,1,1.326-.4l2.982,10.4Z'
        transform='translate(-291.695 -330.202)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default GraduateIcon

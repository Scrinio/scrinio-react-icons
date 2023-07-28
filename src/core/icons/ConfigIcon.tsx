import * as React from 'react'

interface ConfigIconProps {
  color?: string
  isActive?: boolean
  colorActive?: string
}

const ConfigIcon = ({ isActive, color, colorActive }: ConfigIconProps) => {
  const defaultColor = 'rgba(95,0,252,0.96)'

  const customActiveColor = colorActive || '#FFF'
  const customColor = color ? `${color}` : defaultColor

  return (
    <svg
      id='Grupo_8961'
      data-name='Grupo 8961'
      xmlns='http://www.w3.org/2000/svg'
      width='23.308'
      height='24.77'
      viewBox='0 0 23.308 24.77'
    >
      <path
        id='Trazado_7195'
        data-name='Trazado 7195'
        d='M122.1,28.709h0l-1.715-1.237a8.955,8.955,0,0,0,0-2.663l1.717-1.238A1.806,1.806,0,0,0,122.6,21.2l-1.3-2.256a1.812,1.812,0,0,0-2.313-.745l-1.928.87a8.957,8.957,0,0,0-2.307-1.334l-.214-2.106a1.808,1.808,0,0,0-1.8-1.626h-2.6a1.808,1.808,0,0,0-1.8,1.627l-.214,2.1a8.954,8.954,0,0,0-2.307,1.334l-1.929-.87a1.813,1.813,0,0,0-2.313.748l-1.3,2.252a1.807,1.807,0,0,0,.507,2.377l1.715,1.237a8.955,8.955,0,0,0,0,2.663l-1.716,1.238a1.806,1.806,0,0,0-.507,2.373l1.3,2.256a1.812,1.812,0,0,0,2.313.745l1.928-.87a8.962,8.962,0,0,0,2.307,1.334l.214,2.106a1.808,1.808,0,0,0,1.8,1.626h2.6a1.808,1.808,0,0,0,1.8-1.627l.214-2.1a8.959,8.959,0,0,0,2.307-1.334l1.929.87a1.813,1.813,0,0,0,2.313-.748l1.3-2.252a1.807,1.807,0,0,0-.505-2.375Zm-.5,1.8-1.3,2.252a.658.658,0,0,1-.838.273l-2.257-1.018a.578.578,0,0,0-.617.09,7.817,7.817,0,0,1-2.565,1.484.578.578,0,0,0-.386.488l-.25,2.461a.655.655,0,0,1-.652.59h-2.6a.655.655,0,0,1-.652-.588l-.25-2.462a.578.578,0,0,0-.386-.488,7.816,7.816,0,0,1-2.565-1.484.578.578,0,0,0-.617-.09l-2.256,1.018a.657.657,0,0,1-.838-.27l-1.3-2.256a.652.652,0,0,1,.184-.857l2.007-1.447a.578.578,0,0,0,.23-.577,7.822,7.822,0,0,1,0-2.964.578.578,0,0,0-.23-.577l-2.005-1.446a.654.654,0,0,1-.184-.861l1.3-2.252a.658.658,0,0,1,.838-.273l2.257,1.018a.578.578,0,0,0,.617-.09,7.817,7.817,0,0,1,2.565-1.484.578.578,0,0,0,.386-.488l.25-2.461a.655.655,0,0,1,.652-.59h2.6a.655.655,0,0,1,.652.588l.25,2.462a.578.578,0,0,0,.386.488,7.816,7.816,0,0,1,2.565,1.484.578.578,0,0,0,.617.09l2.256-1.018a.657.657,0,0,1,.838.27l1.3,2.256a.653.653,0,0,1-.183.857L119.41,24.08a.578.578,0,0,0-.23.577,7.831,7.831,0,0,1,0,2.964.578.578,0,0,0,.23.577l2.006,1.447a.654.654,0,0,1,.183.86Z'
        transform='translate(-100.025 -13.754)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_7195_-_Contorno'
        data-name='Trazado 7195 - Contorno'
        d='M112.783,38.568h-2.6a2.052,2.052,0,0,1-2.045-1.845l-.2-1.959a9.219,9.219,0,0,1-2.113-1.222l-1.793.809a2.056,2.056,0,0,1-2.625-.845l-1.3-2.257a2.048,2.048,0,0,1,.575-2.693l1.6-1.152a9.182,9.182,0,0,1,0-2.44l-1.6-1.15a2.052,2.052,0,0,1-.575-2.7l1.3-2.251a2.071,2.071,0,0,1,1.783-1.03,2.047,2.047,0,0,1,.842.181l1.795.81a9.212,9.212,0,0,1,2.113-1.222l.2-1.957A2.053,2.053,0,0,1,110.18,13.8h2.6a2.052,2.052,0,0,1,2.045,1.845l.2,1.959a9.215,9.215,0,0,1,2.113,1.222l1.793-.809a2.056,2.056,0,0,1,2.625.845l1.3,2.257a2.049,2.049,0,0,1-.574,2.693l-1.6,1.152a9.186,9.186,0,0,1,0,2.44l1.6,1.155a2.049,2.049,0,0,1,.569,2.692l-1.3,2.251a2.071,2.071,0,0,1-1.783,1.03,2.045,2.045,0,0,1-.842-.181l-1.795-.81a9.216,9.216,0,0,1-2.113,1.222l-.2,1.957A2.053,2.053,0,0,1,112.783,38.568Zm-6.89-5.594.117.093a8.734,8.734,0,0,0,2.245,1.3l.138.055.229,2.254a1.565,1.565,0,0,0,1.559,1.406h2.6a1.565,1.565,0,0,0,1.559-1.408l.229-2.252.138-.055a8.73,8.73,0,0,0,2.244-1.3l.117-.093,2.065.932a1.559,1.559,0,0,0,.641.138,1.58,1.58,0,0,0,1.36-.786l1.3-2.251A1.563,1.563,0,0,0,122,28.951l-1.837-1.324.022-.147a8.711,8.711,0,0,0,0-2.591l-.022-.147L122,23.416a1.562,1.562,0,0,0,.438-2.052l-1.3-2.257a1.567,1.567,0,0,0-2-.644l-2.063.931-.117-.093a8.728,8.728,0,0,0-2.244-1.3l-.139-.055-.229-2.254a1.564,1.564,0,0,0-1.559-1.406h-2.6a1.565,1.565,0,0,0-1.559,1.408l-.229,2.252-.138.055a8.725,8.725,0,0,0-2.244,1.3l-.117.093-2.065-.932a1.56,1.56,0,0,0-.642-.138,1.58,1.58,0,0,0-1.36.786l-1.3,2.251a1.564,1.564,0,0,0,.439,2.057l1.835,1.323-.022.147a8.711,8.711,0,0,0,0,2.591l.022.147-1.837,1.325A1.561,1.561,0,0,0,100.528,31l1.3,2.257a1.567,1.567,0,0,0,2,.644Zm6.89,4.438h-2.6a.9.9,0,0,1-.895-.807l-.25-2.463a.335.335,0,0,0-.223-.281,8.06,8.06,0,0,1-2.645-1.53.339.339,0,0,0-.356-.052L103.556,33.3a.894.894,0,0,1-.369.079.906.906,0,0,1-.78-.45l-1.3-2.257a.9.9,0,0,1,.252-1.177l2.008-1.448a.335.335,0,0,0,.133-.333,8.066,8.066,0,0,1,0-3.055.335.335,0,0,0-.133-.333l-2.005-1.446a.9.9,0,0,1-.252-1.182l1.3-2.251a.909.909,0,0,1,.783-.453.89.89,0,0,1,.367.079l2.257,1.019a.339.339,0,0,0,.356-.052,8.06,8.06,0,0,1,2.645-1.53.334.334,0,0,0,.223-.281l.25-2.461a.9.9,0,0,1,.895-.809h2.6a.9.9,0,0,1,.895.807l.25,2.463a.334.334,0,0,0,.223.281,8.06,8.06,0,0,1,2.645,1.53.338.338,0,0,0,.356.052l2.256-1.018a.893.893,0,0,1,.369-.08.905.905,0,0,1,.78.45l1.3,2.257a.9.9,0,0,1-.252,1.177L119.6,24.323a.335.335,0,0,0-.133.333,8.075,8.075,0,0,1,0,3.055.335.335,0,0,0,.133.333l2.006,1.447a.9.9,0,0,1,.252,1.181l-1.3,2.251a.909.909,0,0,1-.783.453.889.889,0,0,1-.367-.079l-2.257-1.018a.339.339,0,0,0-.356.052,8.06,8.06,0,0,1-2.645,1.53.334.334,0,0,0-.223.281l-.25,2.461A.9.9,0,0,1,112.783,37.412Zm-6.834-5.652a.823.823,0,0,1,.539.2,7.573,7.573,0,0,0,2.485,1.438.825.825,0,0,1,.549.694l.25,2.462a.41.41,0,0,0,.409.368h2.6a.411.411,0,0,0,.409-.371l.25-2.461a.824.824,0,0,1,.549-.694,7.574,7.574,0,0,0,2.485-1.438.822.822,0,0,1,.877-.128l2.257,1.018a.4.4,0,0,0,.166.036.418.418,0,0,0,.36-.209l1.3-2.251a.411.411,0,0,0-.115-.541l-2.005-1.446a.825.825,0,0,1-.327-.821,7.586,7.586,0,0,0,0-2.872.825.825,0,0,1,.327-.821l2.007-1.447a.408.408,0,0,0,.115-.536l-1.3-2.257a.415.415,0,0,0-.357-.206.407.407,0,0,0-.168.036l-2.256,1.018a.822.822,0,0,1-.877-.128,7.573,7.573,0,0,0-2.485-1.438.825.825,0,0,1-.549-.694l-.25-2.462a.41.41,0,0,0-.409-.368h-2.6a.411.411,0,0,0-.409.371l-.25,2.46a.825.825,0,0,1-.549.694,7.574,7.574,0,0,0-2.485,1.438.822.822,0,0,1-.877.128l-2.257-1.018a.4.4,0,0,0-.166-.036.418.418,0,0,0-.36.209l-1.3,2.251a.411.411,0,0,0,.116.541l2,1.445a.825.825,0,0,1,.327.821,7.577,7.577,0,0,0,0,2.872.825.825,0,0,1-.327.821l-2.007,1.447a.408.408,0,0,0-.116.536l1.3,2.257a.415.415,0,0,0,.357.206.408.408,0,0,0,.168-.036l2.256-1.018A.818.818,0,0,1,105.949,31.761Z'
        transform='translate(-99.827 -13.799)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_7196'
        data-name='Trazado 7196'
        d='M248.685,173.84a4.845,4.845,0,1,0,4.845,4.845A4.851,4.851,0,0,0,248.685,173.84Zm0,8.534a3.689,3.689,0,1,1,3.689-3.689A3.693,3.693,0,0,1,248.685,182.374Z'
        transform='translate(-237.275 -166.3)'
        fill={isActive ? customActiveColor : customColor}
      />
      <path
        id='Trazado_7196_-_Contorno'
        data-name='Trazado 7196 - Contorno'
        d='M248.73,173.64a5.09,5.09,0,1,1-5.09,5.09A5.1,5.1,0,0,1,248.73,173.64Zm0,9.691a4.6,4.6,0,1,0-4.6-4.6A4.606,4.606,0,0,0,248.73,183.331Zm0-8.534a3.933,3.933,0,1,1-3.933,3.933A3.938,3.938,0,0,1,248.73,174.8Zm0,7.378a3.445,3.445,0,1,0-3.445-3.445A3.449,3.449,0,0,0,248.73,182.174Z'
        transform='translate(-237.076 -166.345)'
        fill={isActive ? customActiveColor : customColor}
      />
    </svg>
  )
}

export default ConfigIcon
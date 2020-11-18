import React from 'react'

const Logo: React.FC = () => {
  return (
    <svg width="95" height="95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feFlood floodColor="#000000" floodOpacity="0.5" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        fill="grey"
        transform="translate(15)
                rotate(-30, 37.5, 47.5)"
      >
        <path
          d="M28.002 14c0-7 7-14 14-14 7.001 0 14.002 7 14.002 17.501 0 17.501-28.002 45.503-28.002 52.503 0-7-28.002-35.002-28.002-52.503C0 7.001 7 0 14 0c7.001 0 14.002 7 14.002 14z"
          fill="red"
          filter="url(#drop-shadow)"
        />
      </g>
      <g
        fill="grey"
        transform="translate(35)
                rotate(-30, 37.5, 47.5)"
      >
        <path
          d="M24.852 0c7 17.501 24.851 28.002 24.851 47.953a10.5 10.5 0 01-21.001 0 .7.7 0 00-1.4 0c0 14 3.5 15.05 6.65 22.051H15.751c3.15-7 6.65-8.05 6.65-22.051a.7.7 0 00-1.4 0 10.5 10.5 0 01-21.001 0C0 28.002 17.851 17.501 24.852 0z"
          fill="#000"
          filter="url(#drop-shadow)"
        />
      </g>
    </svg>
  )
}

export default Logo

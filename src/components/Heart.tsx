import React from 'react'

const Heart: React.FC = () => {
  return (
    <svg width="75" height="95" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <path
        d="M28.002 14c0-7 7-14 14-14 7.001 0 14.002 7 14.002 17.501 0 17.501-28.002 45.503-28.002 52.503 0-7-28.002-35.002-28.002-52.503C0 7.001 7 0 14 0c7.001 0 14.002 7 14.002 14z"
        fill="red"
        filter="url(#drop-shadow)"
      />
    </svg>
  )
}

export default Heart

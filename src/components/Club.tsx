import React from 'react'

const Club: React.FC = () => {
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
        d="M34.758 45.292c.35 16.451 3.85 17.501 7 24.502h-18.2c3.15-7 6.65-8.05 7-24.502a.7.7 0 00-1.4 0 14.702 14.702 0 11-5.18-14.07.7.7 0 00.98-.98 16.101 16.101 0 1115.4 0 .7.7 0 00.98.98 14.7 14.7 0 11-5.18 14.07.7.7 0 00-1.4 0z"
        fill="#000"
        filter="url(#drop-shadow)"
      />
    </svg>
  )
}

export default Club

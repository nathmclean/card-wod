import React from 'react'

const Diamond: React.FC = () => {
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
        d="M0 35.002C3.5 35.002 28.002 3.5 28.002 0c0 3.5 24.501 35.002 28.002 35.002-3.5 0-28.002 31.502-28.002 35.002 0-3.5-24.502-35.002-28.002-35.002z"
        fill="red"
        filter="url(#drop-shadow)"
      />
    </svg>
  )
}

export default Diamond

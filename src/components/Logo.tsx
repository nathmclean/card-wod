import React from 'react'
import Heart from './Heart'
import Spade from './Spade'

const Logo: React.FC = () => {
  return (
    <div className="flex text-10xl p-0">
      <div className="relative text-red-600 transform -rotate-30">
        <Heart />
      </div>
      <div className="relative text-gray900 -ml-12 transform -rotate-30">
        <Spade />
      </div>
    </div>
  )
}

export default Logo

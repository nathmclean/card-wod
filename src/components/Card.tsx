import React from 'react'
import {Card as CardType, Suits} from '../data/types'

interface CardProps {
  back?: boolean
  card?: CardType
}

const defaultProps: CardProps = {
  back: false
}

const Card: React.FC<CardProps> = ({back, card}) => {
  const symbol = () => {
    switch (card?.suit) {
      case Suits.Clubs:
        return <div className="mt-4 flex justify-center text-6xl">&clubs;</div>
      case Suits.Diamonds:
        return <div className="mt-4 flex justify-center text-6xl">&diams;</div>
      case Suits.Hearts:
        return <div className="mt-4 flex justify-center text-6xl">&hearts;</div>
      case Suits.Spades:
        return <div className="mt-4 flex justify-center text-6xl">&spades;</div>
    }
  }

  const textColor = () => {
    switch (card?.suit) {
      case Suits.Clubs:
      case Suits.Spades:
        return 'text-gray-900'
      default:
        return 'text-red-700'
    }
  }

  if (back) {
    return (
      <div className="border-gray-700 border w-40 h-64 rounded-lg">
        <div className="w-32 h-56 bg-red-400 rounded-l border border-red-700 border-8 m-4" />
      </div>
    )
  }
  return (
    <div className={`${textColor()} bg-gray-100 border-gray-700 border w-40 h-64 rounded-lg p-4`}>
      <div className="text-4xl">{card?.faceValue}</div>
      {symbol()}
    </div>
  )
}

export default Card

import React from 'react'
import {Workout as WorkoutType} from '../data/types'
import Card from './Card'

type WorkoutProps = {
  workout: WorkoutType
  draw: () => void
  end: () => void
}

const Workout: React.FC<WorkoutProps> = ({workout, draw, end}) => {
  const card = workout.deck.drawn[workout.deck.drawn.length - 1]

  const messages: string[] = [
    'Keep Going!',
    "You've got this!",
    'Great Work',
    'Making it look easy',
    'No pain no gain!',
    'Welcome to the gun show'
  ]

  const message = () => {
    switch (workout.deck.drawn.length) {
      case 1:
        return <div className="text-2xl">Your First Exercise is</div>
      case 51:
        return <div className="text-2xl">One more left!</div>
      default:
        const msgNum = Math.floor(Math.random() * messages.length)
        return <div className="text-2xl">{messages[msgNum]}</div>
    }
  }

  return (
    <div className="mt-8 bg-gray-200 shadow-lg w-full sm:w-3/4 rounded-2xl p-4 text-gray-700">
      <div className="my-8 flex justify-center">{message()}</div>
      <div className="my-8 flex justify-center">
        {workout.deck.toDraw.length > 0 ? (
          <div className="transform rotate-3">
            <Card back={true} />
          </div>
        ) : (
          <div />
        )}

        <div className={`transform rotate-6  ${workout.deck.toDraw.length > 0 ? '-ml-32' : ''}`}>
          <div key={new Date().getMilliseconds()} className="transition animate-wiggle">
            <Card card={card} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">
          {card.value} x {workout.exercises[card.suit]}
        </div>
        <button
          onClick={draw}
          className={`${workout.deck.toDraw.length === 0 ? 'bg-green-300' : 'bg-green-500'} text-gray-100 p-2 rounded shadow my-4`}
          disabled={workout.deck.toDraw.length === 0}
        >
          Next Exercise
        </button>
        <div className="text-2xl">{workout.deck.toDraw.length} cards remaining</div>

        <button onClick={end} className="text-sm bg-red-500 text-gray-100 p-2 rounded shadow mt-8 mb-4">
          End Workout
        </button>
      </div>
    </div>
  )
}

export default Workout

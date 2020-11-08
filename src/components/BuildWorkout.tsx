import React from 'react'
import ExerciseSelect from './ExerciseSelect'
import {ChosenExercises, Deck, Exercises, Workout} from '../data/types'
import {Suits} from '../data/types'

type BuildWorkout = {
  exercises: Exercises
  chosen: ChosenExercises
  updateChosenExercise: (suit: Suits, exercise: string) => void
  startWorkout: () => void
  workoutValid: () => boolean
}

const BuildWorkout: React.FC<BuildWorkout> = ({exercises, chosen, updateChosenExercise, startWorkout, workoutValid}) => {
  return (
    <div className="mt-8 bg-gray-200 shadow-lg w-full sm:w-3/4 rounded-2xl p-2 text-gray-700">
      <h3 className="text-2xl text-center my-4">Build your workout</h3>

      <ExerciseSelect suit={Suits.Hearts} exercises={exercises} chosen={chosen.Hearts} updateFunc={updateChosenExercise} />
      <ExerciseSelect suit={Suits.Spades} exercises={exercises} chosen={chosen.Spades} updateFunc={updateChosenExercise} />
      <ExerciseSelect suit={Suits.Diamonds} exercises={exercises} chosen={chosen.Diamonds} updateFunc={updateChosenExercise} />
      <ExerciseSelect suit={Suits.Clubs} exercises={exercises} chosen={chosen.Clubs} updateFunc={updateChosenExercise} />

      <div className="flex justify-center items-center my-6">
        <button
          onClick={() => {
            startWorkout()
          }}
          disabled={!workoutValid()}
          className={`${!workoutValid() ? 'bg-green-300' : 'bg-green-500'} text-gray-100 p-2 rounded shadow`}
        >
          Start Workout
        </button>
      </div>
    </div>
  )
}

export default BuildWorkout

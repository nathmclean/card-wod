import React, {useState} from 'react'
import BuildWorkout from './components/BuildWorkout'
import Workout from './components/Workout'
import {Deck, Exercises, Suits, Workout as WorkoutType} from './data/types'
import Logo from './components/Logo'

function App() {
  const [workout, setWorkout] = useState<WorkoutType>({
    exercises: {
      Hearts: '',
      Spades: '',
      Diamonds: '',
      Clubs: ''
    },
    deck: new Deck(),
    inProgress: false
  })

  const exercises: Exercises = {
    categories: [
      {
        name: 'Lower Body',
        exerciseNames: ['Air Squat', 'Walking Lunge', 'Backward Lunge', 'Glute Bridge', 'Jumping Lunge', 'Calf Raise', 'Box Jumps']
      },
      {name: 'Core', exerciseNames: ['Mountain Climber', 'Russian Twist', 'Leg Raise', 'Bicycle Crunch', 'Situps', 'Crunches']},
      {name: 'Upper Body', exerciseNames: ['Push Up', 'Tricep Dips', 'Overhead Press', 'Pull Up', 'Bent Over Row']},
      {name: 'Other', exerciseNames: ['Burpee']}
    ]
  }

  const updateChosenExercise = (suit: Suits, exercise: string) => {
    switch (suit) {
      case Suits.Hearts:
        setWorkout({...workout, exercises: {...workout.exercises, Hearts: exercise}})
        return
      case Suits.Clubs:
        setWorkout({...workout, exercises: {...workout.exercises, Clubs: exercise}})
        return
      case Suits.Diamonds:
        setWorkout({...workout, exercises: {...workout.exercises, Diamonds: exercise}})
        return
      case Suits.Spades:
        setWorkout({...workout, exercises: {...workout.exercises, Spades: exercise}})
        return
    }
  }

  const selectionComplete = () => {
    if (workout.exercises.Clubs === '') {
      return false
    }
    if (workout.exercises.Diamonds === '') {
      return false
    }
    if (workout.exercises.Spades === '') {
      return false
    }
    if (workout.exercises.Hearts === '') {
      return false
    }
    return true
  }

  const startWorkout = () => {
    workout.deck.shuffle()
    workout.deck.draw()
    if (selectionComplete()) {
      setWorkout({...workout, inProgress: true})
    }
  }

  const drawCard = () => {
    workout.deck.draw()
    setWorkout({...workout})
  }

  const reset = () => {
    const newWorkout = {
      exercises: {
        Hearts: '',
        Spades: '',
        Diamonds: '',
        Clubs: ''
      },
      deck: new Deck(),
      inProgress: false
    }
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  const year = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen items-stretch">
      <header className="bg-gray-200 shadow-lg">
        <div className="flex items-center justify-center p-2">
          <Logo />
          <h2 className="text-4xl text-gray-700">CardWOD</h2>
        </div>
      </header>

      <main className="flex justify-center mb-8">
        {workout.inProgress ? (
          <Workout workout={workout} draw={drawCard} end={reset} />
        ) : (
          <BuildWorkout
            chosen={workout.exercises}
            exercises={exercises}
            updateChosenExercise={updateChosenExercise}
            startWorkout={startWorkout}
            workoutValid={selectionComplete}
          />
        )}
      </main>

      {/*Pin the footer to the bottom*/}
      <div className="flex-grow" />

      <footer className="flex justify-center flex-shrink-0 p-4">
        <div className="text-gray-700">
          Copyright &#169; Nathan Mclean {year} -{' '}
          <a className="hover:underline" href="https://github.com/nathmclean/card-wod">
            find the source code on GitHub
          </a>{' '}
        </div>
      </footer>
    </div>
  )
}

export default App

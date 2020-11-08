import React, {FunctionComponent} from 'react'
import {Suits} from '../data/types'
import {ExerciseCategory, Exercises} from '../data/types'
import Heart from './Heart'
import Diamond from './Diamond'
import Club from './Club'
import Spade from './Spade'

type ExerciseSelectProps = {
  exercises: Exercises
  suit: Suits
  chosen: string
  updateFunc: (suit: Suits, exercise: string) => void
}

const ExerciseSelect: FunctionComponent<ExerciseSelectProps> = ({suit, exercises, chosen, updateFunc}) => {
  const selectSuit = () => {
    switch (suit) {
      case Suits.Hearts:
        return (
          <div>
            <Heart />
          </div>
        )
      case Suits.Diamonds:
        return (
          <div className="pl-1 pr-1">
            <Diamond />
          </div>
        )
      case Suits.Clubs:
        return (
          <div className="mr-1">
            <Club />
          </div>
        )
      case Suits.Spades:
        return (
          <div className="pl-2 -pr-2">
            <Spade />
          </div>
        )
    }
  }

  type option = {
    key: string
    value: string
    display: string
    disabled: boolean
  }

  const buildOptions = (categories: ExerciseCategory[]): option[] => {
    let options: option[] = [{key: 'Select', disabled: true, value: '', display: 'Select'}]

    categories.map((category) => {
      options.push({key: category.name, disabled: true, value: category.name, display: category.name})
      category.exerciseNames.map((name) => {
        options.push({key: name, disabled: false, value: name, display: name})
      })
    })

    return options
  }

  const options: option[] = buildOptions(exercises.categories)

  return (
    <div>
      <div className="flex justify-center items-center">
        {selectSuit()}
        <div className="ml-4">
          <select
            value={chosen}
            onChange={(e) => {
              updateFunc(suit, e.target.value)
            }}
            name="exercises"
            id="exercises"
            className="p-2"
          >
            {options.map((option) => {
              return (
                <option key={option.key} disabled={option.disabled} value={option.value}>
                  {option.display}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ExerciseSelect

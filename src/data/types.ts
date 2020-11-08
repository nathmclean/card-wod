export type Workout = {
  exercises: ChosenExercises
  deck: Deck
  inProgress: boolean
}

export class Deck {
  toDraw: Card[]
  drawn: Card[]

  constructor() {
    this.toDraw = allCards
    this.drawn = []
  }

  draw() {
    if (this.toDraw.length > 0) {
      this.drawn.push(this.toDraw.shift()!)
    }
  }

  reset() {
    this.toDraw = allCards
    this.drawn = []
  }

  shuffle() {
    let currentIndex = this.toDraw.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      temporaryValue = this.toDraw[currentIndex]
      this.toDraw[currentIndex] = this.toDraw[randomIndex]
      this.toDraw[randomIndex] = temporaryValue
    }
  }
}

export type Card = {
  suit: Suits
  value: number
  faceValue: string
}

export type Exercises = {
  categories: ExerciseCategory[]
}

export type ExerciseCategory = {
  name: string
  exerciseNames: string[]
}

export type ChosenExercises = {
  Hearts: string
  Diamonds: string
  Spades: string
  Clubs: string
}

export enum Suits {
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Spades = 'Spades'
}

const allCards = [
  {suit: Suits.Clubs, faceValue: '2', value: 2},
  {suit: Suits.Clubs, faceValue: '3', value: 3},
  {suit: Suits.Clubs, faceValue: '4', value: 4},
  {suit: Suits.Clubs, faceValue: '5', value: 5},
  {suit: Suits.Clubs, faceValue: '6', value: 6},
  {suit: Suits.Clubs, faceValue: '7', value: 7},
  {suit: Suits.Clubs, faceValue: '8', value: 8},
  {suit: Suits.Clubs, faceValue: '9', value: 9},
  {suit: Suits.Clubs, faceValue: '10', value: 10},
  {suit: Suits.Clubs, faceValue: 'J', value: 11},
  {suit: Suits.Clubs, faceValue: 'K', value: 11},
  {suit: Suits.Clubs, faceValue: 'Q', value: 11},
  {suit: Suits.Clubs, faceValue: 'A', value: 11},
  {suit: Suits.Diamonds, faceValue: '2', value: 2},
  {suit: Suits.Diamonds, faceValue: '3', value: 3},
  {suit: Suits.Diamonds, faceValue: '4', value: 4},
  {suit: Suits.Diamonds, faceValue: '5', value: 5},
  {suit: Suits.Diamonds, faceValue: '6', value: 6},
  {suit: Suits.Diamonds, faceValue: '7', value: 7},
  {suit: Suits.Diamonds, faceValue: '8', value: 8},
  {suit: Suits.Diamonds, faceValue: '9', value: 9},
  {suit: Suits.Diamonds, faceValue: '10', value: 10},
  {suit: Suits.Diamonds, faceValue: 'J', value: 11},
  {suit: Suits.Diamonds, faceValue: 'K', value: 11},
  {suit: Suits.Diamonds, faceValue: 'Q', value: 11},
  {suit: Suits.Diamonds, faceValue: 'A', value: 11},
  {suit: Suits.Hearts, faceValue: '2', value: 2},
  {suit: Suits.Hearts, faceValue: '3', value: 3},
  {suit: Suits.Hearts, faceValue: '4', value: 4},
  {suit: Suits.Hearts, faceValue: '5', value: 5},
  {suit: Suits.Hearts, faceValue: '6', value: 6},
  {suit: Suits.Hearts, faceValue: '7', value: 7},
  {suit: Suits.Hearts, faceValue: '8', value: 8},
  {suit: Suits.Hearts, faceValue: '9', value: 9},
  {suit: Suits.Hearts, faceValue: '10', value: 10},
  {suit: Suits.Hearts, faceValue: 'J', value: 11},
  {suit: Suits.Hearts, faceValue: 'K', value: 11},
  {suit: Suits.Hearts, faceValue: 'Q', value: 11},
  {suit: Suits.Hearts, faceValue: 'A', value: 11},
  {suit: Suits.Spades, faceValue: '2', value: 2},
  {suit: Suits.Spades, faceValue: '3', value: 3},
  {suit: Suits.Spades, faceValue: '4', value: 4},
  {suit: Suits.Spades, faceValue: '5', value: 5},
  {suit: Suits.Spades, faceValue: '6', value: 6},
  {suit: Suits.Spades, faceValue: '7', value: 7},
  {suit: Suits.Spades, faceValue: '8', value: 8},
  {suit: Suits.Spades, faceValue: '9', value: 9},
  {suit: Suits.Spades, faceValue: '10', value: 10},
  {suit: Suits.Spades, faceValue: 'J', value: 11},
  {suit: Suits.Spades, faceValue: 'K', value: 11},
  {suit: Suits.Spades, faceValue: 'Q', value: 11},
  {suit: Suits.Spades, faceValue: 'A', value: 11}
]

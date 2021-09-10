const defaultState = {
  currentTurn: 'X',

  fieldValues: [
    null, null, null,
    null, null, null,
    null, null, null
  ],

  winnerInfo: {
    winnerValue: null,
    winnerLine: null
  }
}

const ADD_VALUE = 'ADD_VALUE'
const CHANGE_CURRENT_TURN = 'CHANGE_CURRENT_TURN'
const SET_WINNER = 'SET_WINNER'
const RESTART_GAME = 'RESTART_GAME'

export const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VALUE: {
      const temp = [...state.fieldValues]
      temp[action.payload] = state.currentTurn

      return {...state, fieldValues: [...temp]}
    }

    case CHANGE_CURRENT_TURN:
      return {...state, currentTurn: state.currentTurn === 'X' ? 'O' : 'X'}

    case SET_WINNER:
      return {...state, winnerInfo: action.payload}

    case RESTART_GAME: {
      const tempValues = [...state.fieldValues]
      tempValues.fill(null)

      let tempWinnerInfo = Object.entries(state.winnerInfo)
      tempWinnerInfo.forEach((item) => {
        item.fill(null, 1)
      })
      tempWinnerInfo = Object.fromEntries(tempWinnerInfo)

      return {...state, currentTurn: 'X', fieldValues: [...tempValues], winnerInfo: {...tempWinnerInfo}}
    }

    default:
      return state
  }
}


export const addValueAction = (payload) => ({type: ADD_VALUE, payload})
export const changeCurrentTurnAction = () => ({type: CHANGE_CURRENT_TURN})
export const setWinnerAction = (payload) => ({type: SET_WINNER, payload})
export const restartGameAction = () => ({type: RESTART_GAME})

export const calculateWinner = (fieldValues) => {
  const winnerInfo = {
    winnerValue: null,
    winnerLine: null
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ]

  lines.forEach((line) => {
    const [a, b, c] = line

    if (fieldValues[a] && fieldValues[a] === fieldValues[b] && fieldValues[a] === fieldValues[c]) {
      winnerInfo.winnerValue = fieldValues[a]
      winnerInfo.winnerLine = [a, b, c]
    }
  })

  const emptyValues = fieldValues.filter((item) => item === null)
  if (emptyValues.length === 0 && !winnerInfo.winnerValue) {
    winnerInfo.winnerValue = 'Draw'
  }

  return winnerInfo
}
const defaultState = {
  currentTurn: 'X',
  fieldValues: [
    null, null, null,
    null, null, null,
    null, null, null
  ]
}

export const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VALUE': {
      const temp = [...state.fieldValues]
      temp[action.payload] = state.currentTurn

      return {...state, fieldValues: [...temp]}
    }

    case 'CHANGE_CURRENT_TURN':
      return {...state, currentTurn: state.currentTurn === 'X' ? 'O' : 'X'}

    case 'RESTART_GAME': {
      const temp = [...state.fieldValues]
      temp.fill(null)

      return {...state, currentTurn: 'X', fieldValues: [...temp]}
    }

    default:
      return state
  }
}

export const calculateWinner = (fieldValues) => {
  const winnerInfo = {
    winner: null,
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
      winnerInfo.winner = fieldValues[a]
      winnerInfo.winnerLine = [a, b, c]
    }
  })

  const emptyValues = fieldValues.filter((item) => item === null)
  if (emptyValues.length === 0) {
    winnerInfo.winner = 'Draw'
  }

  return winnerInfo
}
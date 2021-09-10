const defaultState = {
  xScore: 0,
  oScore: 0,
  drawScore: 0
}

const ADD_SCORE = 'ADD_SCORE'

export const scoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SCORE': {
      if (action.payload === 'X') {
        return {...state, xScore: state.xScore + 1}
      }

      if (action.payload === 'O') {
        return {...state, oScore: state.oScore + 1}
      }

      if (action.payload === 'Draw') {
        return {...state, drawScore: state.drawScore + 1}
      }
    }

    default:
      return state
  }
}


export const addScoreAction = (payload) => ({type: ADD_SCORE, payload})
import React, {useEffect} from 'react'
import styled from 'styled-components'
import {v4 as uuid} from 'uuid'
import {useDispatch, useSelector} from "react-redux";
import {Cell, CellStl, CellVariant} from "./cell";
import {
  addValueAction,
  calculateWinner,
  changeCurrentTurnAction,
  restartGameAction,
  setWinnerAction
} from "../store/gameReducer";


const GameFieldStl = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);

  ${CellStl}:nth-child(1) {
    border-right: white 5px solid;
    border-bottom: white 5px solid;
  }
  
  ${CellStl}:nth-child(2) {
    border-bottom: white 5px solid;
  }
  
  ${CellStl}:nth-child(3) {
    border-left: white 5px solid;
    border-bottom: white 5px solid;
  }
  
  ${CellStl}:nth-child(4) {
    border-right: white 5px solid;
  }
  
  ${CellStl}:nth-child(6) {
    border-left: white 5px solid;
  }
  
  ${CellStl}:nth-child(7) {
    border-top: white 5px solid;
    border-right: white 5px solid;
  }
  
  ${CellStl}:nth-child(8) {
    border-top: white 5px solid;
  }
  
  ${CellStl}:nth-child(9) {
    border-top: white 5px solid;
    border-left: white 5px solid;
  }
`


export const GameField = () => {
  const dispatch = useDispatch()
  const fieldValues = useSelector((state) => state.game.fieldValues)
  const {winnerValue, winnerLine} = useSelector((state) => state.game.winnerInfo)

  useEffect(() => {
    const calculatedWinner = calculateWinner(fieldValues)
    if (calculatedWinner.winnerValue) {
      dispatch(setWinnerAction(calculatedWinner))
    }
  }, [fieldValues])

  const handleClick = (index) => {
    if (!fieldValues[index]) {
      dispatch(addValueAction(index))
      dispatch(changeCurrentTurnAction())
    }

    if (winnerValue) {
      dispatch(restartGameAction())

    //   dispatch({
    //     type: 'ADD_SCORE',
    //     payload: winnerInfo.winner
    //   })
    }
  }

  const handleSetVariant = (index) => {
    if (winnerValue && winnerLine) {
      for (let i = 0; i < winnerLine.length; i++) {
        if (winnerLine[i] === index) {
          return CellVariant.win
        }
      }

      return CellVariant.lose
    }

    if (winnerValue && !winnerLine) {
      return CellVariant.lose
    }

    if (!winnerValue) {
      return CellVariant.default
    }
  }


  return (
    <GameFieldStl>
      {
        fieldValues.map((item, index) => (
          <Cell
            key={uuid()}
            value={item}
            variant={handleSetVariant(index)}
            onClick={() => handleClick(index)}
          />
        ))
      }
    </GameFieldStl>
  )
}
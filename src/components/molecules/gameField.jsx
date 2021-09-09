import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {v4 as uuid} from 'uuid'
import {useDispatch, useSelector} from "react-redux";
import {Cell, CellStl} from "../atoms/cell";
import {calculateWinner} from "../../store/gameReducer";


const GameFieldStl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  justify-content: center;

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

  const [winnerInfo, setWinnerInfo] = useState(calculateWinner(fieldValues))

  const handleClick = (index) => {
    if (!fieldValues[index] && !winnerInfo.winner) {
      dispatch({
        type: 'ADD_VALUE',
        payload: index
      })

      dispatch({
        type: 'CHANGE_CURRENT_TURN'
      })
    }

    if (winnerInfo.winner) {
      dispatch({
        type: 'RESTART_GAME'
      })
    }
  }

  useEffect(() => {
    const calculatedWinner = calculateWinner(fieldValues)
    setWinnerInfo(calculatedWinner)
  }, [fieldValues])



  ////////////////////////////////////////
  useEffect(() => {
    console.log(winnerInfo)
  }, [winnerInfo])
  ////////////////////////////////////////

  return (
    <GameFieldStl>
      {
        fieldValues.map((item, index) => {

          if (!winnerInfo.winner) {
            return (
              <Cell
                key={uuid()}
                value={item}
                onClick={() => handleClick(index)}
                isWinner={null}
              />
            )
          }

          else {
            if (winnerInfo.winner === 'Draw') {
              return (
                <Cell
                  key={uuid()}
                  value={item}
                  onClick={() => handleClick(index)}
                  isWinner={false}
                />
              )
            }

            else {
              const [a, b, c] = winnerInfo.winnerLine
              return (
                <Cell
                  key={uuid()}
                  value={item}
                  onClick={() => handleClick(index)}
                  isWinner={index === a || index === b || index === c}
                />
              )
            }
          }
        })
      }
    </GameFieldStl>
  )
}
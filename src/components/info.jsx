import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";


const InfoStl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  font-size: 32px;
  
  & > div:nth-child(1) {
    justify-self: center;
  }

  & > div:nth-child(2) {
    justify-self: center;
  }
`


export const Info = () => {
  const winner = useSelector((state) => state.game.winnerInfo.winnerValue)
  const currentTurn = useSelector((state) => state.game.currentTurn)

  return (
    <InfoStl>
      <div>
        {winner ? 'Победил: ' : 'Текущий ход: '}
      </div>
      <div>
        {winner ? winner : currentTurn}
      </div>
    </InfoStl>
  )
}
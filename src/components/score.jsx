import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";


const ContainerStl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(2, 100);
  
  justify-content: center;
  justify-items: center;
`

const ScoreTitleStl = styled.div`
  
`

const ScoreStl = styled.div`
  
`


export const Score = () => {
  const dispatch = useDispatch()
  const {xScore, drawScore, oScore} = useSelector((state) => state.score)
  console.log(xScore, drawScore, oScore)

  return (
    <ContainerStl>
      <ScoreTitleStl>
        X
      </ScoreTitleStl>

      <ScoreTitleStl>
        -
      </ScoreTitleStl>

      <ScoreTitleStl>
        O
      </ScoreTitleStl>
    </ContainerStl>
  )
}
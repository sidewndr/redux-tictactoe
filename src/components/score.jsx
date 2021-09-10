import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {v4 as uuid} from "uuid";


const ScoreContainerStl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  justify-items: center;
  user-select: none;
`

const ScoreStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ScoreTitleStl = styled.div`
  font-size: 28px;
`

const ScoreValueStl = styled.div`
  margin-top: 20px;
`


export const Score = () => {
  const score = useSelector((state) => state.score)

  const setTitle = (arr) => {
    switch (arr[0]) {
      case 'xScore': return 'x'
      case 'oScore': return 'o'
      default: return '-'
    }
  }

  return (
    <ScoreContainerStl>
      {
        Object.entries(score).map((item) => (
          <ScoreStl
            key={uuid()}
          >
            <ScoreTitleStl>
              {
                setTitle(item)
              }
            </ScoreTitleStl>
            <ScoreValueStl>
              {item[1]}
            </ScoreValueStl>
          </ScoreStl>
        ))
      }
    </ScoreContainerStl>
  )
}
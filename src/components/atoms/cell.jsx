import React from 'react'
import styled, {css} from 'styled-components'


export const CellStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
  
  ${({isWinner}) => {
    if (isWinner === null) {
      return css`
        color: white;
      `
    } else if (isWinner === true) {
      return css`
        color: white;
        font-weight: bold;
      `
    } else if (isWinner === false) {
      return css`
        color: gray;
      `
    }
  }}
`


export const Cell = ({value, onClick, isWinner}) => {
  return (
    <CellStl
      onClick={onClick}
      isWinner={isWinner}
    >
      {value}
    </CellStl>
  )
}
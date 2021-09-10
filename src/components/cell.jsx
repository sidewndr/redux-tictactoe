import React from 'react'
import styled, {css} from 'styled-components'

export const CellVariant = {
  default: 'default',
  win: 'win',
  lose: 'lose'
}

export const CellStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
  
  ${({variant}) => {
    if (variant === CellVariant.default) {
      return undefined
    }  
    
    if (variant === CellVariant.win) {
      return css`
        color: white;
        font-weight: bold;
      `
    }
    
    if (variant === CellVariant.lose) {
      return css`
        color: gray;
      `
    }
  }}
`


export const Cell = ({value, variant, onClick}) => {
  return (
    <CellStl
      variant={variant}
      onClick={onClick}
    >
      {value}
    </CellStl>
  )
}
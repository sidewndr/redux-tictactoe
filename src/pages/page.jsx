import React from 'react'
import styled from 'styled-components'
import {GameField} from "../components/gameField";
import {Score} from "../components/score";
import {Info} from "../components/info";


const PageStl = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 2fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
`


export const Page = () => {
  return (
    <PageStl>
      <Info />
      <GameField />
      <Score />
    </PageStl>
  )
}
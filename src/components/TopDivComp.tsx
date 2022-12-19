import React from 'react'
import styled from 'styled-components'


const Container = styled.div``
const TopDiv = styled.div<any>`
  width: 290px;
  height: 96px;
  margin-top: 32px;
  display: ${props=>props.active ? "flex" : "none"};
  flex-direction: column;
  gap:8px;
  transition: all 800ms ease;
  @media(min-width: 820px){
    width: 540px;
    height: 84px;
    margin-top: 80px;
    gap: 13px;
  }
  `
const TopDivTop = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  @media(min-width: 820px){
    font-size: 18px;
  }
`
const TopDivBottom = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 700;
  @media(min-width: 820px){
    font-size: 18px;
  }
`

const TopDivComp = ({time, location, active} : {time: any, active:any,location : any}) => {
  return (
    <Container>
      <TopDiv active = {active} >
        <TopDivTop>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</TopDivTop>
        <TopDivBottom>Ada Lovelace</TopDivBottom>
      </TopDiv>
    </Container>
  )
}

export default TopDivComp

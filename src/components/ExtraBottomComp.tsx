import React from "react";
import styled from "styled-components";

const Container = styled.div<any>`
  height: 256px;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: ${(props) => (props.active ? "none" : "flex")};
  color: white;
  margin-top: ${(props) => (props.active ? "30px" : "-260px")};
  transition: all 300ms ease;
  backdrop-filter: blur(20, 3871px);
  box-sizing: border-box;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 26px;
  padding-right: 26px;
  flex-direction: column;
  gap: 16px;
`;
const InfoDiv = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
`;
const Right = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
 
`;

const ExtraBottomComp = ({
  active,
  location,
}: {
  active: any;
  location: any;
    }) => {
    
    const date: any = new Date();
    const start : any = new Date(date.getFullYear(), 0, 0);
    const diff: any = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    const weekNumber = Math.ceil(day / 7);
    
  return (
    <Container active={active} date = {date} location = {location}>
      <InfoDiv>
        <Left>CURRENT TIMEZONE</Left>
              <Right>{location.timezone }</Right>
      </InfoDiv>
      <InfoDiv>
        <Left>DAY OF THE YEAR</Left>
              <Right>{day}</Right>
      </InfoDiv>
      <InfoDiv>
        <Left>DAY OF THE WEEK</Left>
              <Right>{date.getDay()}</Right>
      </InfoDiv>
      <InfoDiv>
        <Left>WEEK NUMBER</Left>
              <Right>{weekNumber}</Right>
      </InfoDiv>
    </Container>
  );
};

export default ExtraBottomComp;

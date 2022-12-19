import { useEffect, useState } from "react";
import styled from "styled-components";
import moon from "./moon.png";
import sun from "./Sun.png";
import buttonMore from "./ButtonMore.png";
import buttonLess from "./ButtonLess.png";

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => (props.active ? "227px" : "99px")};
  margin-bottom: ${(props) => (props.active ? "0px" : "296px")};
  color: white;
  transition: all 800ms ease;
  @media (min-width: 820px) {
    margin-top: ${(props) => (props.active ? "570px" : "99px")};
    margin-bottom: ${(props) => (props.active ? "0px" : "153px")};
  } ;
`;
const Top = styled.div`
  display: flex;
  gap: 16.44px;
  margin-left: 8px;
  @media (min-width: 820px) {
    gap: 17.66px;
  }
`;
const TopLeft = styled.div<any>`
  height: 24px;
  width: 22.34px;
  background-image: ${(props) =>
    props.time.hours >= 18 || props.time.hours < 4
      ? `url(${moon})`
      : `url(${sun})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const TopRight = styled.div`
  line-height: 25px;
  letter-spacing: 3px;
  font-size: 15px;
  @media (min-width: 820px) {
    font-size: 18px;
    letter-spacing: 3.6px;
    line-height: 28px;
  }
`;

const Time = styled.div`
  display: flex;
  font-weight: 400;
  gap: 12px;
  align-items: center;
  @media (min-width: 820px) {
    height: 175px;
  }
`;
const TimeLeft = styled.div`
  font-size: 100px;
  font-weight: 700;
  flex: 82%;
  display: flex;
  justify-content: left;
  align-items: center;
  @media (min-width: 820px) {
    font-size: 175px;
    letter-spacing: -4.375px;
  }
`;
const TimeRight = styled.div`
  flex: 18%;
  display: flex;
  justify-content: left;
  font-size: 15px;
  padding-top: 87px;
  @media (min-width: 820px) {
    font-size: 32px;
    padding-top: 110px;
  }
`;

const Place = styled.div`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 700;
  margin-left: 8px;
  margin-top: 16px;
  line-height: 28px;
  letter-spacing: 3px;
  @media (min-width: 820px) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }
`;
const BottomButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
  @media (min-width: 820px) {
    margin-top: 80px;
    margin-bottom: 77px;
  }
`;
const BottomButton = styled.div<any>`
  height: 39px;
  width: 115px;
  border-radius: 28px;
  background-image: ${(props) =>
    props.active ? `url(${buttonMore})` : `url(${buttonLess})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  @media (min-width: 820px) {
    height:56px;
    width:146px;
    background-size: contain;
  }
`;
const BottomDivComp = ({
  time,
  location,
  active,
  setActive,
  handleActiveChange,
}: {
  time: any;
  active: any;
  setActive: any;
  handleActiveChange: any;
  location: any;
}) => {
  const date = new Date();
  const [weekDay, setWeekDay] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const curTime = date.getHours();
    if (curTime >= 4 && curTime < 12) {
      setGreeting("GOOD MORNING");
    } else if (curTime >= 12 && curTime < 17) {
      setGreeting("GOOD AFTERNOON");
    } else if (curTime >= 17 && curTime < 21) {
      setGreeting("GOOD EVENING");
    } else if (curTime >= 21 || curTime < 4) {
      setGreeting("GOOD EVENING");
    }
    const curDay = date.getDay();
    curDay === 1
      ? setWeekDay("Mon")
      : curDay === 2
      ? setWeekDay("Tue")
      : curDay === 3
      ? setWeekDay("Wed")
      : curDay === 4
      ? setWeekDay("Thu")
      : curDay === 5
      ? setWeekDay("Fri")
      : curDay === 6
      ? setWeekDay("Sat")
      : curDay === 7
      ? setWeekDay("Sun")
      : setWeekDay("It's Apocalypse no days left in the week");
  }, []);

  return (
    <Container active={active}>
      <Top>
        <TopLeft time={time} />
        <TopRight>{greeting}</TopRight>
      </Top>

      <Time>
        <TimeLeft>
          {time.hours}:{time.minutes}
        </TimeLeft>
        <TimeRight>{location.timezone}</TimeRight>
      </Time>
      <Place>
        IN {location.city}, {location.countryName}
      </Place>
      <BottomButtonDiv>
        <BottomButton active={active} onClick={handleActiveChange} />
      </BottomButtonDiv>
    </Container>
  );
};

export default BottomDivComp;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomDivComp from "./BottomDivComp";
import ExtraBottomComp from "./ExtraBottomComp";
import dayBack from "./jeremy-bishop-dvACrXUExLs-unsplash.png";
import nightBack from "./NightBack.png";
import TopDivComp from "./TopDivComp";
import dayBackIpad from "./DayBackIpad.png";
import nightBackIpad from "./NightBackIpad.png";
import dayBackPC from "./DayBackPC.png";
import nightBackPC from "./NightBackPC.png";

const useCurrentCallback = (callback: any): any => {
  const reference: any = useRef();
  reference.current = callback;
  return (...args: any): any => {
    return reference.current?.(args);
  };
};

const Container = styled.div<any>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  background-image: ${(props) =>
    props.timeProps >= 6 && props.timeProps < 17
      ? `url(${dayBack})`
      : `url(${nightBack})`};
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background-image: ${(props) =>
      props.timeProps >= 6 && props.timeProps < 17
        ? `url(${dayBackIpad})`
        : `url(${nightBackIpad})`};
  }
  @media (min-width: 1440px) {
    background-image: ${(props) =>
      props.timeProps >= 6 && props.timeProps < 17
        ? `url(${dayBackPC})`
        : `url(${nightBackPC})`};
  }
`;
const Wrapper = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  };

`;

const Page = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const [location, setLocaltion] = useState({
    countryName: "",
    city: "",
    timezone: "",
  });
  const getGeoInfo = () => {
    axios.get("https://ipapi.co/json/").then((res) => {
      const data = res.data;
      setLocaltion({
        ...location,
        countryName: data.country_name,
        city: data.city,
        timezone: data.timezone,
      });
    });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);

  const currentCallback = useCurrentCallback(() => {
    const date: any = new Date();
    const currentHour: any = ("0" + date.getHours()).slice(-2);
    const dateSetter = {
      hours: currentHour,
      minutes: date.getMinutes(),
    };
    setTime((time) => ({
      ...time,
      ...dateSetter,
    }));
  });
  useEffect(() => {
    const handle = setInterval(currentCallback, 1000);
    return () => clearInterval(handle);
  });
  const [active, setActive] = useState<boolean>(true);
  const handleActiveChange = () => {
    setActive((current) => !current);
  };
  return (
    <Container timeProps={time.hours}>
      <Wrapper>
        <TopDivComp time={time} location={location} active={active} />

        <BottomDivComp
          time={time}
          location={location}
          active={active}
          setActive={setActive}
          handleActiveChange={handleActiveChange}
        />
      </Wrapper>

      <ExtraBottomComp active={active} location={location} />
    </Container>
  );
};

export default Page;

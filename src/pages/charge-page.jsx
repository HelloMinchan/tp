import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export function ChargePage({ isMinus, setIsMinus, seconds, setSeconds }) {
  const handlePlusSecondsClick = (time) => {
    if (isMinus) {
      if (seconds > time) {
        setSeconds(seconds - time);
      } else {
        setIsMinus(false);
        setSeconds(time - seconds);
      }
    } else {
      setSeconds((prevSeconds) => prevSeconds + time);
    }
  };
  return (
    <Container>
      <Title>시간 충전하기</Title>

      <Link to="/">
        <ChargeTimeButton onClick={() => handlePlusSecondsClick(1800)}>
          <ChargeTimeTitle>30분</ChargeTimeTitle>
          <ChargeTimeDescription>4,000원</ChargeTimeDescription>
        </ChargeTimeButton>
      </Link>

      <Link to="/">
        <ChargeTimeButton onClick={() => handlePlusSecondsClick(3600)}>
          <ChargeTimeTitle>1시간</ChargeTimeTitle>
          <ChargeTimeDescription>7,500원</ChargeTimeDescription>
        </ChargeTimeButton>
      </Link>

      <Link to="/">
        <ChargeTimeButton onClick={() => handlePlusSecondsClick(18000)}>
          <ChargeTimeTitle>5시간</ChargeTimeTitle>
          <ChargeTimeDescription>37,500원</ChargeTimeDescription>
        </ChargeTimeButton>
      </Link>

      <Link to="/">
        <ChargeTimeButton onClick={() => handlePlusSecondsClick(36000)}>
          <ChargeTimeTitle>
            10<span style={{ fontWeight: "bold", fontSize: "30px" }}>+1</span>
            시간
          </ChargeTimeTitle>
          <ChargeTimeDescription>75,000원</ChargeTimeDescription>
        </ChargeTimeButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  padding: 110px 7% 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ChargeTimeButton = styled.div`
  margin-top: 20px;
  color: white;
  padding: 7%;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(to left, #ef642f, #fb4357);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChargeTimeTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const ChargeTimeDescription = styled.div`
  font-size: 20px;
`;

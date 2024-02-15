import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function MainPage({ isMinus, setIsMinus, seconds, setSeconds }) {
  useEffect(() => {
    let plusIntervalId;
    let minusIntervalId;

    if (isMinus) {
      plusIntervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      minusIntervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(minusIntervalId);

          setIsMinus(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(minusIntervalId);
      clearInterval(plusIntervalId);
    };
  }, [seconds, isMinus]);

  const getTimeStringFromSeconds = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${String(hours).padStart(2, "0")} : ${String(
      minutes
    ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
    return formattedTime;
  };

  const getMinuteFromSeconds = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    return minutes + 1;
  };

  return (
    <Container>
      <TimeContainer>
        <Nickname>하고잡이님의 남은 시간</Nickname>
        <RemainTime>
          {isMinus ? "-" : null}
          {getTimeStringFromSeconds(seconds)}
        </RemainTime>
      </TimeContainer>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/charge">
          <ChargeButton>충전</ChargeButton>
        </Link>
      </div>

      {isMinus ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Faconi
            src={
              "https://www.hushwish.com/wp-content/uploads/2020/02/emo_cgv_011.gif"
            }
          />
          <WarningText>하고잡이님!</WarningText>
          <WarningText>
            부족한 시간{" "}
            <span style={{ fontWeight: "bold", color: "red" }}>
              {getMinuteFromSeconds(seconds)}
            </span>
            분을 충전해야
          </WarningText>
          <WarningText>퇴장 QR코드가 활성화 됩니다.</WarningText>
          <WarningText>먼저 충전을 진행해주세요 :)</WarningText>
        </div>
      ) : (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "22px" }}>
            입퇴장시{" "}
            <span style={{ fontWeight: "bold", color: "red" }}>QR코드</span>를
            인식해주세요.
          </div>
          <QrCode
            src={
              "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            }
          />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 110px 7% 0;
`;

const TimeContainer = styled.div`
  color: white;
  padding: 7%;
  height: 190px;
  border-radius: 20px;
  background: linear-gradient(to left, #ef642f, #fb4357);
`;

const Nickname = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const RemainTime = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 45px;
  font-weight: bold;
`;

const ChargeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  width: 80px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #666;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const QrCode = styled.img`
  height: 230px;
  background-repeat: no-repeat;
`;

const Faconi = styled.img`
  height: 150px;
  background-repeat: no-repeat;
  margin-bottom: 13px;
`;

const WarningText = styled.div`
  font-weight: bold;
  font-size: 19px;
`;

import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
export function Header({ children }) {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <MenuIcon sx={{ color: "#898c8a", fontSize: "30px" }} />
          <HeaderLogo
            src={
              "https://i.namu.wiki/i/2SBi3yMQgknjVCOx5eu-fqn64n7piih0FMM3lYccxeKnLOZaNHol0N5Z0gZRURs78a3t2pjO7lH_xEZKuaXmmw.svg"
            }
          />
          <SearchIcon sx={{ color: "#898c8a", fontSize: "30px" }} />
        </HeaderContent>
        <HeaderMenu>
          <HeaderMenuSelectedSection>타임페이</HeaderMenuSelectedSection>
          <HeaderMenuSection>이벤트</HeaderMenuSection>
          <HeaderMenuSection>패스트오더</HeaderMenuSection>
          <HeaderMenuSection>기프트샵</HeaderMenuSection>
          <HeaderMenuSection>@CGV</HeaderMenuSection>
        </HeaderMenu>
      </HeaderContainer>

      {children || <Outlet />}
    </>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: white;

  z-index: 999;
`;

const HeaderContent = styled.div`
  padding: 0 5% 0 5%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  height: 27px;
  background-repeat: no-repeat;
`;

const HeaderMenu = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 44px;
  background: linear-gradient(to left, #ef642f, #fb4357);
`;

const HeaderMenuSelectedSection = styled.div`
  padding-top: 3px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: white;
  height: 100%;
  border-bottom: 3px solid #fff;
`;

const HeaderMenuSection = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: white;
`;

import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${(prop) => prop.theme.accentColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  position: relative;
  left: 70%;
  font-size: 15px;
  padding: 10px;
`;
const ThemeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin: 0 5px;
  :hover {
    cursor: pointer;
  }
`;

export default function TopBar() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const onModeClick = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <span>Mode</span>
        <ThemeBtn onClick={onModeClick}>
          <span>{isDark ? "🌜" : "🌞"}</span>
        </ThemeBtn>
      </ButtonWrapper>
    </Wrapper>
  );
}

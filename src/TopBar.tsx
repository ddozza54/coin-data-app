import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${(prop) => prop.theme.accentColor};
`;

const ModeText = styled.div`
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  left: 70%;
`;
const ThemeBtn = styled.span`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 20px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default function TopBar() {
  return (
    <Wrapper>
      <ModeText>
        <span>Mode</span>
        <ThemeBtn>☀️</ThemeBtn>
      </ModeText>
    </Wrapper>
  );
}

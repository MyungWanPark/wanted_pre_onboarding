import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  padding: 100px 200px;
`;
const Mini = styled.div`
  position: absolute;
  right: 0;
  width: 0%;
  height: 200px;
  z-index: 1;
  background-color: blue;
`;

const Square = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: darkgray;
  &:hover {
    ${Mini} {
      right: -100%;
      z-index: 1;
      width: 100%;
      transition: all 1s linear;
    }
  }

  ${Mini} {
    z-index: 1;
    transform: translateX(-100%);
    transition: all 1s linear;
  }
`;

const Memo2 = (props) => (
  <Container>
    <Square>
      <Mini />
    </Square>
  </Container>
);

export default Memo2;

import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;

    /* background-position: right; */
    background: linear-gradient(to left, darkgrey 50%, blue 50%) right;
    background-size: 200%;
    transition: 1s;
    &.toggle--checked {
      /* background-position: left; */
      background: linear-gradient(to right, blue 50%, darkgrey 50%) left;
      background-size: 200%;
      transition: 1s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 1s;
    &.toggle--checked {
      left: 27px;
      transition: 1s;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Memo = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
      </ToggleContainer>
      <Desc>
        <div>Toggle Switch {isOn ? "ON" : "OFF"}</div>
      </Desc>
    </>
  );
};

export default Memo;

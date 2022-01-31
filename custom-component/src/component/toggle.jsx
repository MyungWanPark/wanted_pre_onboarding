import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  > .toggle-container {
    position: relative;
    background: linear-gradient(to right, RGB(76, 17, 209) 50%, #c5c5c5 50%)
      right;
    background-size: 200%;
    transition: 500ms;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;

    &.color-on {
      background: linear-gradient(to right, RGB(76, 17, 209) 50%, #c5c5c5 50%)
        left;
      background-size: 200%;
      transition: 500ms;
    }

    > .toggle-btn {
      position: absolute;
      background-color: white;
      width: 20px;
      height: 20px;
      z-index: 1;
      border-radius: 50%;
      margin: 5px;
      transform: translateX(0px);
      transition: all 300ms linear;
    }

    > .toggle-btn.btn-on {
      transform: translateX(30px);
      transition: all 300ms linear;
    }
  }
  > .notification {
    margin-top: 20px;
  }
`;

const Toggle = (props) => {
  const [isOn, setisOn] = useState(false);

  const isOnHandler = () => {
    setisOn(!isOn);
  };

  return (
    <Container>
      <div
        className={`toggle-container ${isOn ? "color-on" : ""}`}
        onClick={isOnHandler}
      >
        {/* <div className={`toggle-color ${isOn ? "color-on" : ""}`}></div> */}
        <div className={`toggle-btn ${isOn ? "btn-on" : ""}`}></div>
      </div>
      <div className="notification">Toggle Switch {isOn ? "ON" : "OFF"}</div>
    </Container>
  );
};

export default Toggle;

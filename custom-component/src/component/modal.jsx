import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ModalBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 20px;
  font-size: 10px;
  background-color: #4700ce;
  color: white;
`;

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 30vh;
  border-radius: 20px;
  background-color: white;

  > .close-btn {
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    font-weight: 700;
  }
  > .quote {
    position: absolute;
    text-align: center;
    bottom: 40%;
    width: 50%;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

const Modal = () => {
  const [isAppeared, setIsAppeared] = useState(false);
  const handleIsAppeared = (event) => {
    if (event.target === event.currentTarget) {
      setIsAppeared(!isAppeared);
    }
  };

  return (
    <Container>
      <ModalBtn onClick={handleIsAppeared}>
        {isAppeared ? "close Modal" : "Open Modal"}
      </ModalBtn>
      {isAppeared ? (
        <ModalBackground onClick={handleIsAppeared}>
          <ModalBox>
            <div className="close-btn" onClick={handleIsAppeared}>
              &times;
            </div>
            <div className="quote">HELLO CODESTATES!</div>
          </ModalBox>
        </ModalBackground>
      ) : null}
    </Container>
  );
};

export default Modal;

import React, { useEffect } from "react";
import { useRef, useState } from "react/cjs/react.development";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 25%;
  height: 7%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  > .nameSpan,
  .ageSpan,
  input,
  input:focus {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    text-align: center;
    width: 70%;
    height: 90%;
    border: 1px solid lightgray;
    font-size: 15px;
  }
  > input:focus {
    font-size: 15px;
    outline: none;
    border: 2px solid #59728e;
  }

  > input::selection {
    background: #c4dbf6;
    color: black;
  }
`;
const Result = styled.div`
  width: 40%;
  margin-top: 30px;
  margin-left: 20%;
`;

const ClickToEdit = () => {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(18);
  const [tempName, setTempName] = useState("홍길동");
  const [tempAge, setTempAge] = useState(18);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isAgeEditable, setIsAgeEditable] = useState(false);
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  useEffect(() => {
    if (isNameEditable) {
      nameInputRef.current.focus();
    }
  }, [isNameEditable]);

  useEffect(() => {
    if (isAgeEditable) {
      ageInputRef.current.focus();
    }
  }, [isAgeEditable]);

  const handleNameOnBlur = () => {
    setIsNameEditable(false);
    setName(tempName);
  };

  const handleAgeOnBlur = () => {
    setIsAgeEditable(false);
    setAge(tempAge);
  };

  return (
    <TotalContainer>
      <InputContainer>
        <span>이름</span>
        {isNameEditable ? (
          <input
            ref={nameInputRef}
            type="text"
            onBlur={handleNameOnBlur}
            value={tempName}
            onChange={(event) => setTempName(event.target.value)}
          />
        ) : (
          <span className="nameSpan" onClick={() => setIsNameEditable(true)}>
            {name}
          </span>
        )}
      </InputContainer>
      <InputContainer>
        <span>나이</span>
        {isAgeEditable ? (
          <input
            ref={ageInputRef}
            type="text"
            onBlur={handleAgeOnBlur}
            value={tempAge}
            onChange={(event) => setTempAge(event.target.value)}
          />
        ) : (
          <span className="ageSpan" onClick={() => setIsAgeEditable(true)}>
            {age}
          </span>
        )}
      </InputContainer>
      <Result>
        이름 {name} 나이 {age}
      </Result>
    </TotalContainer>
  );
};

export default ClickToEdit;

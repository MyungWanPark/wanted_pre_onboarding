import React, { useEffect } from "react";
import { useRef, useState } from "react/cjs/react.development";
import styled from "styled-components";

const TotalContainer = styled.div``;
const InputContainer = styled.div``;
const Result = styled.div``;

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

  const handleNameChange = (event) => {
    setTempName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setTempAge(event.target.value);
  };

  return (
    <TotalContainer>
      <InputContainer>
        <span>이름</span>
        {isNameEditable ? (
          <input
            ref={nameInputRef}
            type="text"
            onBlur={() => {
              setIsNameEditable(false);
              setName(tempName);
            }}
            value={tempName}
            onChange={handleNameChange}
          />
        ) : (
          <span
            onClick={() => {
              setIsNameEditable(true);
              setIsAgeEditable(false);
            }}
          >
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
            onBlur={() => {
              setIsAgeEditable(false);
              setAge(tempAge);
            }}
            value={tempAge}
            onChange={handleAgeChange}
          />
        ) : (
          <span
            onClick={() => {
              setIsAgeEditable(true);
              setIsNameEditable(false);
            }}
          >
            {age}
          </span>
        )}
      </InputContainer>
      <Result>
        이름: {name} 나이: {age}
      </Result>
    </TotalContainer>
  );
};

export default ClickToEdit;

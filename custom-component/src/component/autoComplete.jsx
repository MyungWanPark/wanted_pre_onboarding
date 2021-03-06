import { useState, useEffect } from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;

  > .input {
    padding: 10px;
    border: none;
    outline: none;
    width: 90%;
    height: 100%;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 10px;
    &:focus {
      box-shadow: 0px 8px 6px -3px rgba(0, 0, 0, 0.3);
    }
  }
  > .input.isInputted {
    box-shadow: none;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  > .input.isInputted.unProperInput {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 8px 6px -3px rgba(0, 0, 0, 0.3);
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 5%;
  top: 10%;
  height: 70%;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const DropBox = styled.ul`
  width: 90%;
  list-style: none;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0px;
  padding: 5px 0px 10px 0px;
  box-shadow: 0px 8px 6px -3px rgba(0, 0, 0, 0.3);
  > li {
    padding-left: 10px;
  }
  > li:hover {
    background-color: #efefef;
  }
`;

const possibleOptions = [
  "antique",
  "vintage",
  "rustic",
  "refurbished",
  "중고A급",
];

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputted, setIsInputted] = useState(false);
  const [options, setOptions] = useState(possibleOptions);

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
      setIsInputted(false);
    }

    if (inputValue) {
      setOptions(
        possibleOptions.filter((option) => {
          return option.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setIsInputted(true);
    setInputValue(event.target.value);
  };

  const selectDropDown = (selectedOption) => {
    setIsInputted(true);
    setInputValue(selectedOption);
  };

  return (
    <TotalContainer>
      <Wrapper>
        <InputContainer>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="(AutoComplete) type any words"
            className={
              isInputted
                ? options.length !== 0
                  ? `input isInputted properInput`
                  : `input isInputted unProperInput`
                : "input"
            }
          />
          <DeleteBtn onClick={() => setInputValue("")}>&times;</DeleteBtn>
        </InputContainer>
        {options.length !== 0 ? (
          <DropBox>
            {options.map((option, index) => {
              return (
                <li key={index} onClick={() => selectDropDown(option)}>
                  {option}
                </li>
              );
            })}
          </DropBox>
        ) : null}
      </Wrapper>
    </TotalContainer>
  );
};

export default Autocomplete;

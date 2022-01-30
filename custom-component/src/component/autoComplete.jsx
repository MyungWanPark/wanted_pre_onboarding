import { useState, useEffect } from "react";
import styled from "styled-components";

const InputContainer = styled.div``;

const DropBox = styled.ul``;

const possibleOptions = [
  "antique",
  "vintage",
  "rustic",
  "refurbished",
  "중고A급",
];
const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(possibleOptions);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
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
    setInputValue(event.target.value);
  };

  const selectDropDown = (clickedOption) => {
    setInputValue(clickedOption);
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowDown" && options.length > selectedIndex + 1) {
      setSelectedIndex(selectedIndex + 1);
    }

    if (event.key === "ArrowUp" && selectedIndex >= 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    if (event.key === "Enter" && selectedIndex >= 0) {
      selectDropDown(options[selectedIndex]);
      setSelectedIndex(-1);
    }
  };

  return (
    <div>
      <InputContainer>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        ></input>
        <div onClick={() => setInputValue("")}>&times;</div>
      </InputContainer>

      <DropBox>
        {options.map((option, index) => {
          return (
            <li key={index} onClick={() => selectDropDown(option)}>
              {option}
            </li>
          );
        })}
      </DropBox>
    </div>
  );
};

export default Autocomplete;

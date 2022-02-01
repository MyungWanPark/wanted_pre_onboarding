import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  width: 90vw;
  border: 1px solid #4601cc;
  border-radius: 10px;

  > .ulTag {
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    padding: 5px;

    > .tagList {
      list-style: none;
      margin: 5px;
      background-color: #4601cc;
      color: white;
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      cursor: pointer;

      > .tagContent {
        display: inline-block;
      }
      > .tagClose {
        width: 15px;
        height: 15px;
        display: inline-block;
        border-radius: 50%;
        background-color: white;
        margin-left: 5px;
        color: #4601cc;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        font-weight: 800;
      }
    }
  }
`;

const FormTag = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
`;

const InputTag = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Tag = () => {
  const [hashTagArr, setHashTagArr] = useState([
    { id: 1, value: "CodeStates" },
    { id: 2, value: "JJang" },
  ]);

  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    for (let i = 0; i < hashTagArr.length; i++) {
      if (hashTagArr[i].value === inputValue) {
        formRef.current.reset();
        return;
      }
    }

    if (inputValue) {
      const newArr = [...hashTagArr, { id: Date.now(), value: inputValue }];
      setHashTagArr(newArr);
      formRef.current.reset();
    }
  };

  const removeTags = (index) => {
    const afterRemovedTag = hashTagArr.filter((tag) => {
      return tag.id !== index;
    });
    setHashTagArr(afterRemovedTag);
  };

  return (
    <Container>
      <TagBox>
        <ul className="ulTag">
          {hashTagArr.map((tag) => (
            <li key={tag.id} className="tagList">
              <span className="tagContent">{tag.value}</span>
              <span className="tagClose" onClick={() => removeTags(tag.id)}>
                &times;
              </span>
            </li>
          ))}
        </ul>
        <FormTag ref={formRef} onSubmit={onSubmit}>
          <InputTag
            type="text"
            ref={inputRef}
            placeholder="Press enter to add tags"
          />
        </FormTag>
      </TagBox>
    </Container>
  );
};

export default Tag;

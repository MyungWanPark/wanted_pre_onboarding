import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Tabs = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;

  > .listItem {
    width: 30%;
    height: 10%;
    padding: 10px;
    background-color: #e0e0e0;
    color: #a7a7a7;
    font-weight: 500;
  }

  > .listItem.active {
    background-color: #4900ce;
    color: white;
    transition: all 300ms linear;
  }
`;

const Content = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <Container>
      <Tabs>
        <li
          className={`listItem ${currentTab === 0 ? "active" : ""}`}
          onClick={() => changeTab(0)}
        >
          Tab1
        </li>
        <li
          className={`listItem ${currentTab === 1 ? "active" : ""}`}
          onClick={() => changeTab(1)}
        >
          Tab2
        </li>
        <li
          className={`listItem ${currentTab === 2 ? "active" : ""}`}
          onClick={() => changeTab(2)}
        >
          Tab3
        </li>
      </Tabs>
      <Content>
        Tab menu {currentTab === 0 ? "ONE" : currentTab === 1 ? "TWO" : "THREE"}
      </Content>
    </Container>
  );
};

export default Tab;

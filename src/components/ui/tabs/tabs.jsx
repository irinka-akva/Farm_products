import React, { useState } from "react";
import { Content, StyledButton, StyledText } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {tabs &&
        tabs.length &&
        tabs.map((tab, index) => {
          if (index === activeTab) {
            return (
              <StyledButton active minWidth={92} key={tab.title}>
                <StyledText active>{tab.title}</StyledText>
              </StyledButton>
            );
          }
          return (
            <StyledButton
              minWidth={137}
              key={tab.title}
              onClick={() => setActiveTab(index)}
            >
              <StyledText>{tab.title}</StyledText>
            </StyledButton>
          );
        })}
      <Content>{tabs[activeTab].content}</Content>
      <Content>{tabs[activeTab].price}</Content>
    </div>
  );
}

export default Tabs;

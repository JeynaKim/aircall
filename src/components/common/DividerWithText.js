import React from "react";
import styled from "styled-components";

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px;
`;

const StyledBorder = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`;

const StyledContent = styled.div`
  padding: 0 10px 0 10px;
  white-space: nowrap;
  color: #66666e;
`;

export const DividerWithText = ({ children }) => {
  return (
    <DividerContainer>
      <StyledBorder />
      <StyledContent>{children}</StyledContent>
      <StyledBorder />
    </DividerContainer>
  );
};

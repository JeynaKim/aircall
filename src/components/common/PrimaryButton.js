import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3ec420;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 20px;
  min-width: 80px;
`;

const PrimaryButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default PrimaryButton;

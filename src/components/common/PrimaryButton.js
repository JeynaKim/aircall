import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  background-color: #3ec420;
  cursor: pointer;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 20px;
  min-width: 80px;
`;

const PrimaryButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default PrimaryButton;

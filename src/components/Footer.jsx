import React from "react";
import styled from "styled-components";

import DialPadIcon from "../assets/dialpad.png";

import {
  PhoneIcon,
  UserIcon,
  Cog8ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  margin: 0 auto;
  padding: 10px 0;
  border-top: 1px solid #e5e5e5;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 33.33%;
  justify-content: space-around;
}
`;

const StyledDialPadButtonContainer = styled.div`
  position: relative;
`;

const StyledDialPadButton = styled.div`
  height: 75px;
  width: 75px;
  background-color: white;
  position: absolute;
  bottom: 8px;
  left: -35px;
  border-radius: 100px;
  cursor: pointer;

  :active {
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.6);
  }
`;

const StyledDialPadIcon = styled.img`
  border: 2px solid #e5e5e5;
  border-radius: 50%;
  background-color: white;
  height: 63px;
  width: 63px;
  margin-top: 6px;
  margin-left: 6px;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  height: 30px;
`;

const StyledUserIcon = styled(UserIcon)`
  height: 30px;
`;

const StyledCog8ToothIcon = styled(Cog8ToothIcon)`
  height: 30px;
`;

const StyledInformationCircleIcon = styled(InformationCircleIcon)`
  height: 30px;
`;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledButtonsContainer>
        <StyledPhoneIcon />
        <StyledUserIcon />
      </StyledButtonsContainer>
      <StyledDialPadButtonContainer>
        <StyledDialPadButton>
          <StyledDialPadIcon src={DialPadIcon} />
        </StyledDialPadButton>
      </StyledDialPadButtonContainer>
      <StyledButtonsContainer>
        <StyledCog8ToothIcon />
        <StyledInformationCircleIcon />
      </StyledButtonsContainer>
    </StyledFooterContainer>
  );
};

export default Footer;

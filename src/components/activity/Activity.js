import React from "react";
import styled from "styled-components";
import moment from "moment";

import inboundIcon from "../../assets/inbound_call.png";
import outboundIcon from "../../assets/outbound_call.png";
import missedIcon from "../../assets/missed_call.png";
import voicemailIcon from "../../assets/voicemail.png";

const StyledActivityContainer = styled.div`
  height: 30px;
  padding: 15px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNumberContainer = styled.div`
  display: flex;
`;

const StyledNumber = styled.div`
  font-weight: bold;
  margin-left: 6px;
`;

const StyledCallIcon = styled.img`
  display: flex;
  height: 25px;
  width: 25px;
`;

const StyledDetails = styled.div`
  font-size: 10px;
  color: #66666e;
  margin-top: 3px;
  margin-left: 6px;
`;

const StyledTime = styled.div`
  font-size: 10px;
  color: #66666e;
`;

const StyledFrom = styled.span`
  font-weight: bold;
`;

const Activity = ({ activity, handleActivitySelect, timeStr }) => {
  if (!activity.direction || !activity.to || !activity.from || !activity.via)
    return null;

  let message = "tried to call on ";
  let number = activity.to;
  let iconSrc = outboundIcon;

  if (activity.direction === "inbound") {
    message = "call received from ";
    number = activity.from;

    if (activity.call_type === "answered") {
      iconSrc = inboundIcon;
    } else if (activity.call_type === "missed") {
      iconSrc = missedIcon;
    } else {
      iconSrc = voicemailIcon;
    }
  }

  return (
    <StyledActivityContainer
      key={`${activity.id}`}
      onClick={() => handleActivitySelect(activity.id)}
    >
      <StyledRow>
        <StyledNumberContainer>
          <StyledCallIcon src={iconSrc} alt="call_icon" />
          <div>
            <StyledNumber>{`+ ${number}`}</StyledNumber>
            <StyledDetails>
              <span>{message}</span>
              <StyledFrom>{activity.from}</StyledFrom>
            </StyledDetails>
          </div>
        </StyledNumberContainer>
        <StyledTime>{timeStr}</StyledTime>
      </StyledRow>
    </StyledActivityContainer>
  );
};

export default Activity;

import React from "react";
import styled from "styled-components";
import moment from "moment";

import avatar from "../assets/userAvatar.png";
import inboundIcon from "../assets/inbound_call.png";
import outboundIcon from "../assets/outbound_call.png";
import missedIcon from "../assets/missed_call.png";
import voicemailIcon from "../assets/voicemail.png";

import { secondsToReadableTime } from "../helpers/helper";

import {
  StyledBoldText,
  StyledSmallerText,
  StyledNormalText,
} from "./common/commonStyles";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 336px;
  height: 292px;
  border-radius: 14px;
  border: 1px solid #e5e5e5;
`;

const StyledDetailsHeader = styled.div`
  height: 110px;
  background-color: #e5e5e5;
  text-align: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const StyledAvatarContainer = styled.div`
  padding-top: 50px;
`;

const StyledAvatar = styled.img`
  width: 100px;
  border: solid white 4px;
  border-radius: 50%;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border: solid white 4px;
  border-radius: 50%;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e5e5e5;
`;

const StyledTest2 = styled.div``;

const StyledCallTo = styled.div`
  padding: 3px 3px;
`;

const StyledFrom = styled.span`
  font-weight: bold;
`;

const StyledBottomContainerText = styled.div`
  margin-right: 8px;
`;

const UserDetails = ({ activity }) => {
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
    <StyledContainer>
      <StyledDetailsHeader>
        <StyledAvatarContainer>
          <StyledAvatar src={avatar} alt="" />
          <StyledTest2>
            <StyledBoldText>Jeyna Kim</StyledBoldText>
            <StyledCallTo>{`+ ${activity.to}`}</StyledCallTo>
            <StyledNormalText>
              {moment(activity.created_at).format("MMM DD YYYY, h:mm a")}
            </StyledNormalText>
            <StyledNormalText>{`${secondsToReadableTime(
              activity.duration
            )}`}</StyledNormalText>
          </StyledTest2>
        </StyledAvatarContainer>
      </StyledDetailsHeader>

      <StyledBottomContainer>
        <StyledImg src={iconSrc} />
        <StyledBottomContainerText>
          <span>{message}</span>
          <StyledFrom>{`${activity.from}`}</StyledFrom>
        </StyledBottomContainerText>
        <div>
          <span>Via</span> <StyledFrom>{`${activity.via}`}</StyledFrom>
        </div>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default UserDetails;

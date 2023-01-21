import React from "react";
import styled from "styled-components";

import UserDetails from "../UserDetails.jsx";

import { StyledNormalText } from "../common/commonStyles";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const StyledContainer = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
`;

const ActivityDetails = ({ activity, goBack, handleActivityArchive }) => {
  return (
    <div>
      <UserDetails activity={activity} />

      {activity.is_archived && (
        <StyledNormalText>This call is archived</StyledNormalText>
      )}

      <StyledContainer>
        <PrimaryButton
          onClick={() =>
            handleActivityArchive(activity.id, !activity.is_archived)
          }
        >
          {activity.is_archived ? "Unarchive" : "Archive"}
        </PrimaryButton>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
      </StyledContainer>
    </div>
  );
};

export default ActivityDetails;

import React, { useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { DividerWithText } from "../common/DividerWithText";

import Activity from "./Activity";

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

const StyledArchiveBoxIcon = styled(ArchiveBoxIcon)`
  display: flex;
  height: 20px;
`;

const StyledArchiveText = styled.span`
  display: flex;
  font-weight: bold;
  margin-left: 8px;
`;

const ActivityList = ({ activities, handleActivitySelect }) => {
  const dates = Array.from(
    new Set(
      activities.map((activity) =>
        moment(activity.created_at).format("MMM DD YYYY")
      )
    )
  );

  const activiesByDates = dates.map((date) => {
    const sameDayActivities = activities.filter(
      (activity) => moment(activity.created_at).format("MMM DD YYYY") === date
    );

    return {
      date: date,
      activities: sameDayActivities,
    };
  });

  return (
    <div>
      <StyledActivityContainer>
        <StyledArchiveBoxIcon />
        <StyledArchiveText>Archive all calls</StyledArchiveText>
      </StyledActivityContainer>
      {activiesByDates.map((activityByDate, i) => {
        return (
          <div key={`activityByDate-${i}`}>
            <DividerWithText>{activityByDate.date}</DividerWithText>
            {activityByDate.activities.map((activity, i) => {
              return (
                <Activity
                  key={`activity-${i}`}
                  activity={activity}
                  handleActivitySelect={handleActivitySelect}
                  timeStr={moment(activity.created_at).format("h:mm a")}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ActivityList;

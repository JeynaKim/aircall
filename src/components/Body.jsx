import React, { useState, useEffect } from "react";
import { INBOX, ARCHIVED } from "../helpers/constants";

import moment from "moment";

import ActivityList from "./activity/ActivityList";
import ActivityDetails from "./activity/ActivityDetails";

import {
  getActivities,
  getActivity,
  archiveActivity,
} from "../api/ActivityApi";

const Body = ({ listType, listView, setListView }) => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({});

  useEffect(() => {
    if (listView === true) {
      getActivities().then((data) => {
        if (listType === INBOX) {
          setActivities(data.filter((activity) => !activity.is_archived));
        } else {
          setActivities(data.filter((activity) => activity.is_archived));
        }
      });
    }
  }, [listView, listType]);

  const handleActivitySelect = (activityId) => {
    getActivity(activityId).then((data) => {
      setActivity(data);
      setListView(false);
    });
  };

  const goBack = () => {
    setListView(true);
  };

  const handleActivityArchive = (activityId, shouldArchive) => {
    archiveActivity(activityId, shouldArchive).then((_data) => {
      getActivity(activityId).then((data) => {
        setActivity(data);
      });
    });
  };

  return (
    <div>
      {listView ? (
        <ActivityList
          activities={activities}
          handleActivitySelect={handleActivitySelect}
        />
      ) : (
        <div>
          <ActivityDetails
            activity={activity}
            goBack={goBack}
            handleActivityArchive={handleActivityArchive}
          />
        </div>
      )}
    </div>
  );
};

export default Body;

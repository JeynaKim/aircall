export function getActivities() {
  const response = fetch(
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities",
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));

  return response;
}

export function getActivity(activityId) {
  const response = fetch(
    `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${activityId}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));

  return response;
}

export function archiveActivity(activityId, shouldArchive) {
  const response = fetch(
    `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${activityId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        is_archived: shouldArchive,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));

  return response;
}

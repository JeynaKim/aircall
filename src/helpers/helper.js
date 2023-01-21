export const secondsToReadableTime = (secs) => {
  secs = Math.round(secs);
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let timeStr = `${seconds}s`;

  if (minutes > 0) {
    timeStr = `${minutes}min ${timeStr}`;
  }
  if (hours > 0) {
    timeStr = `${hours}h ${timeStr}`;
  }

  return timeStr;
};

const statusCodeMessageMap = {
  404: 'Could not find data at the requested endpoint'
};
const timeToHours = {
  hour: 1,
  hours: 1,
  day: 24,
  days: 24,
  week: 168,
  weeks: 168,
  month: 730.001,
  months: 730.001,
  year: 8760,
  years: 8760
};
function HTTPErrorMessage(statusCode) {
  return {
    statusCode,
    message: statusCodeMessageMap[statusCode]
  };
}

function SYSErrorMessage(statusCode, message) {
  return {
    statusCode,
    message: message
  };
}

function convertTimeToHours(humanTime) {
  let mtime = humanTime.split(' ');
  return parseInt(mtime[0]) * timeToHours[mtime[1]];
}

module.exports = { HTTPErrorMessage, SYSErrorMessage, convertTimeToHours };

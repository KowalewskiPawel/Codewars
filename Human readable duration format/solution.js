function formatDuration(seconds) {
  if (seconds < 0) {
    return;
  } else if (seconds === 0) {
    return "now";
  } else {
    if (seconds < 60) {
      return `${seconds} ${seconds > 1 ? "seconds" : "second"}`;
    }
    if (seconds >= 60 && seconds < 3600) {
      const mins = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return sec === 0
        ? `${mins} ${mins > 1 ? "minutes" : "minute"}`
        : `${mins} ${mins > 1 ? "minutes" : "minute"} and ${sec} ${
            sec > 1 ? "seconds" : "second"
          }`;
    }
    if (seconds >= 3600 && seconds < 3600 * 24) {
      const hMins = Math.floor(seconds / 3660);
      const hours = Math.floor(seconds / 3600);
      const hSec = (seconds - hours * 3600) % 60;
      return hSec && hMins
        ? `${hours} ${hours > 1 ? "hours" : "hour"}, ${hMins} ${
            hMins > 1 ? "minutes" : "minute"
          } and ${hSec} ${hSec > 1 ? "seconds" : "second"}`
        : `${hours} ${hours > 1 ? "hours" : "hour"}`;
    }
    if (seconds >= 3600 * 24 && seconds < 3600 * 24 * 365) {
      const days = Math.floor(seconds / 86400);
      const dhours = Math.floor((seconds - days * 86400) / 3600);
      const dSec = ((seconds - days * 86400) % 3600) % 60;
      const dMins = Math.floor(((seconds - days * 86400) % 3600) / 60);

      return `${days} ${days > 1 ? "days" : "day"}${
        dhours
          ? dhours > 1
            ? ", " + dhours + " hours"
            : ", " + dhours + " hour"
          : ""
      }${
        dMins
          ? dMins > 1
            ? ", " + dMins + " minutes"
            : ", " + dMins + " minute"
          : ""
      }${
        dSec
          ? dSec > 1
            ? " and " + dSec + " seconds"
            : " and " + dSec + " second"
          : ""
      }`;
    }
    if (seconds > 86400 * 365) {
      const years = Math.floor(seconds / (86400 * 365));
      const days = Math.floor((seconds - years * (86400 * 365)) / 86400);
      const dhours = Math.floor(
        (seconds - Math.floor(seconds / 86400) * 86400) / 3600
      );
      const dSec = ((seconds - days * 86400) % 3600) % 60;
      const dMins = Math.floor(((seconds - days * 86400) % 3600) / 60);

      return `${years} ${years > 1 ? "years, " : "year, "}${days} ${
        days > 1 ? "days" : "day"
      }${
        dhours
          ? dhours > 1
            ? ", " + dhours + " hours"
            : ", " + dhours + " hour"
          : ""
      }${
        dMins > 0 && dSec === 0
          ? dMins > 1
            ? " and " + dMins + " minutes"
            : " and " + dMins + " minute"
          : ""
      }${
        dMins && dSec > 0
          ? dMins > 1
            ? ", " + dMins + " minutes"
            : ", " + dMins + " minute"
          : ""
      }${
        dSec
          ? dSec > 1
            ? " and " + dSec + " seconds"
            : " and " + dSec + " second"
          : ""
      }`;
    }
  }
}

function humanReadable(seconds) {
  let second = seconds;
  const hours = Math.floor(second / 3600);
  second = second % 3600;

  const mins = Math.floor(second / 60);
  second = second % 60;

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`;
}

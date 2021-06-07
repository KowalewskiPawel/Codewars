function rgb(r, g, b) {
  const hex = [r, g, b].map((item) => {
    if (item < 0) {
      return "00";
    } else if (item > 255) {
      let hex = 255;
      return hex.toString(16);
    } else {
      let temp = Math.abs(item).toString(16);
      return temp.length === 1 ? "0" + temp : temp;
    }
  });
  return hex.join("").toUpperCase();
}

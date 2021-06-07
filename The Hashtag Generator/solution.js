function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }
  const string = str
    .split(" ")
    .filter(Boolean)
    .map((item) => {
      return item[0].toUpperCase() + item.substring(1);
    });
  let hashtag = "#";
  if (string.length > 1) {
    for (let i = 0; i < string.length; i++) {
      hashtag += string[i];
    }
  } else {
    hashtag += string[0];
  }
  if (hashtag.length < 141) {
    return hashtag;
  } else {
    return false;
  }
}

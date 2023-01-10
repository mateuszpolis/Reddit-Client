export const truncateText = (text, limit) => {
  return text.length > limit ? text.slice(0, limit - 1) + "... (Click to show more)" : text;
};

export const convertDate = (val) => {
  const date = new Date(val * 1000);
  return date.toDateString();
};

// functino from: "https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn"
export const intToString = (value) => {
  let suffixes = ["", "k", "m", "b", "t"];
  let suffixNum = Math.floor(("" + value).length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

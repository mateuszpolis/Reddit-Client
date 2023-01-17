export const truncateText = (text, limit) => {
  return text.length > limit
    ? text.slice(0, limit - 1) + "... (Click to show more)"
    : text;
};

export const convertDate = (val) => {
  const date = new Date(val * 1000);
  return date.toDateString();
};

// functino from: "https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn"
export const intToString = (value) => {
  let suffixes = ["", "k", "m", "b", "t"];
  let suffixNum = Math.floor((("" + value).length - 1) / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(3)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

export const htmlDecode = (input) => {
  if (typeof input === "undefined") {
    return input;
  }
  input = input.replace(/&amp;/g, "&");
  input = input.replace(/&gt;/g, ">");
  input = input.replace(/&lt;/g, "<");
  return input;
};

export const getSource = (input) => {
  let src = input.slice(41);
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '"') {
      src = src.slice(0, i);
      break;
    }
  }
  src = htmlDecode(src);
  return src;
};

/**
 * Shortens a text to given limit
 * 
 * @param {string} text Text to shorten 
 * @param {number} limit Maximum number of charachters
 * @returns {string} Shortened text with (Click to show more) at the end
 */
export const truncateText = (text, limit) => {
  return text.length > limit
    ? text.slice(0, limit - 1) + "... (Click to show more)"
    : text;
};

/**
 * Takes in number of seconds and returns a formatted date
 * 
 * @param {number} val Number of seconds
 * @returns {date} Formatted date
 */
export const convertDate = (val) => {
  const date = new Date(val * 1000);
  return date.toDateString();
};

/**
 * Formats a number to a shorter version with suffixes
 * 
 * @param {number} value Number to format
 * @returns {string} Formatted number with annotations (k, m, b, t)
 */
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

/**
 * Decodes html entities 
 * 
 * @param {string} input Text to decode 
 * @returns {string} Decoded text
 */
export const htmlDecode = (input) => {
  if (typeof input === "undefined") {
    return input;
  }
  input = input.replace(/&amp;/g, "&");
  input = input.replace(/&gt;/g, ">");
  input = input.replace(/&lt;/g, "<");
  return input;
};

/**
 * Returns url from embeded iframe
 * 
 * @param {string} input Embeded iframe
 * @returns {string} Embeded url 
 */
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

export const handleShowComments = () => {
  const commentSection = document.getElementById("postComments");
  const likeIcon = document.getElementById("upvotesOnMoblie");
  const commentButton = document.getElementById("openCommentsButton");
  if (
    commentSection.style.top === "95vh" ||
    commentSection.style.top === undefined
  ) {
    commentSection.style.top = "25vh";
    likeIcon.style.opacity = "0";
    commentButton.style.opacity = "0";
  } else {
    commentSection.style.top = "95vh";
    likeIcon.style.opacity = "1";
    commentButton.style.opacity = "1";
  }
};
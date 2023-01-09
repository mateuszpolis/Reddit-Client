export const truncateText = (text, limit) => {
  const shortened = text.indexOf("", limit);
  if (shortened === -1) {
    return text;
  }
  return text.substring(0, shortened);
};

export const convertDate = (val) => {
  const date = new Date(val * 1000);
  return date.toDateString();
};

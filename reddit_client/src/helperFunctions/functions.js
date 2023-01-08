export const truncateText = (text, limit) => {
  const shortened = text.indexOf("", limit);
  if (shortened === -1) {
    return text;
  }
  return text.substring(0, shortened);
};

export const convertDate = (val) => {
  const date = new Date(val);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

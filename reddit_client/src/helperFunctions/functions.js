export const truncateText = (text, limit) => {
  const shortened = text.indexOf("", limit);
  if (shortened === -1) {
    return text;
  }
  return text.substring(0, shortened);
};

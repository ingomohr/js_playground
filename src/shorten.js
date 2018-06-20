const shorten = (s, maxLength) => {
  if (s.length > maxLength) {
    s = s.slice(0, maxLength - 3) + "...";
  }
  return s;
};

export { shorten };

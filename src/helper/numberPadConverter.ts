const numberPadConverter = number => {
  const str = '' + (number + 1);
  const pad = '000';
  const ans = pad.substring(0, pad.length - str.length) + str;
  return ans + '#';
};

export { numberPadConverter };
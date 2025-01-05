const getGCD = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getGCD(y, x % y);
};

export default getGCD;

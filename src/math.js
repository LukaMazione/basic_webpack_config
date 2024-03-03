const add = (a, b) => {
  throw new Error('Error !');
  return a + b;
};

module.exports = {
  add,
};

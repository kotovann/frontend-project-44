import getRandomInt from './getRandomInt.js';

export default () => {
  const progressionStep = getRandomInt(1, 10);
  const progressionStart = getRandomInt(1, 10);
  const progressionArray = [];
  for (let i = progressionStart; progressionArray.length <= 10; i += progressionStep) {
    progressionArray.push(i);
  }
  return progressionArray;
};

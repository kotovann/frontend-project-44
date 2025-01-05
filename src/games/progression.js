import getRandomInt from '../helpers/getRandomInt.js';
import makeProgression from '../helpers/makeProgression.js';

export default () => {
  const gameCondition = 'What number is missing in the progression?';
  const progression = makeProgression();
  const hiddenIndex = getRandomInt(0, 9);
  const rightAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const gameTask = `${progression.join(' ')}`;

  return { gameCondition, rightAnswer, gameTask };
};

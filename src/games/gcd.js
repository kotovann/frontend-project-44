import getRandomInt from '../helpers/getRandomInt.js';
import getGCD from '../helpers/getGCD.js';

export default () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  const rightAnswer = String(getGCD(randomInt1, randomInt2));
  const gameTask = `${randomInt1} ${randomInt2}`;

  return { gameCondition, rightAnswer, gameTask };
};

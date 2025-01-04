// What is the result of the expression?
import getRandomInt from '../helpers/getRandomInt.js';
import makeMath from '../helpers/makeMath.js';

export default () => {
  const gameCondition = 'What is the result of the expression?';
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  const signs = ['*', '-', '+'];
  const randomIndex = (getRandomInt() - 1) % signs.length;
  const rightAnswer = String(makeMath(randomInt1, randomInt2, signs[randomIndex]));

  const gameTask = `${randomInt1} ${signs[randomIndex]} ${randomInt2}`;

  return { gameCondition, rightAnswer, gameTask };
};

import getRandomInt from '../helpers/getRandomInt.js';
import isPrime from '../helpers/isPrime.js';

export default () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomInt = getRandomInt();
  const rightAnswer = isPrime(randomInt) ? 'yes' : 'no';
  const gameTask = `${randomInt}`;

  return { gameCondition, rightAnswer, gameTask };
};

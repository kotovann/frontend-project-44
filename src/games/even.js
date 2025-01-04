import getRandomInt from '../helpers/getRandomInt.js';

export default () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomInt = getRandomInt();
  const rightAnswer = getRandomInt() % 2 === 0 ? 'yes' : 'no';
  const gameTask = `${randomInt}`;
  return { gameCondition, gameTask, rightAnswer };
};

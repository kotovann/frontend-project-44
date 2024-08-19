import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  const playEven = () => {
    while (count < 3) {
      const randomInt = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${randomInt}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
        count = 0;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  playEven();
};

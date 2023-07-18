import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js';

const styledMessage = chalk.bgWhite.black(greet('Lee'));
console.log(styledMessage);

figlet(greet('Lee'), function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });





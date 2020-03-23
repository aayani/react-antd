/* eslint-disable no-console */
import chalk from 'chalk';
import moment from 'moment';

export default {
  info: (msg, context = 'Info') => {
    console.log(
      chalk.yellow(`[${context}]`),
      msg,
      chalk.green(`[${moment().format('YYYY-MM-DD hh:mm:ss a')}]`)
    );
  },
  error: (msg, context = 'Error') => {
    console.error(
      chalk.red(`[${context}]`),
      msg,
      chalk.green(`[${moment().format('YYYY-MM-DD hh:mm:ss a')}]`)
    );
  },
};

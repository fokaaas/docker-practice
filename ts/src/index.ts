import { Command } from 'commander';

const program = new Command();

program
  .name('Vowel Counter')
  .description('Return the number of vowels in the given string')
  .version('0.0.1', '-v, --version', 'output the current version')
  .argument('<string>', 'input string')
  .parse();

const str = program.args[0];
const count = (str.match(/[aeiouy]/ig)||[]).length
console.log(count);

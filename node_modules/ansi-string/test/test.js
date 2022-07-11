'use strict';

const assert = require('assert');

const ansi = require('..');

const ansiCode = {
  begin: '\x1b[',
  end: 'm',
  reset:  0,
  red: 91,
  yellow:93,
};

describe('Function style', function() {
  const {begin, end, reset, red} = ansiCode;
  it('wraps given string(s) with ansicode', function() {
    const str = 'You can make color like this';
    const redString = ansi.red(str);
    assert.ok(redString.startsWith(begin + red + end + str[0]));
    assert.ok(redString.endsWith(str.slice(-1) + begin + reset + end));
  });
});

describe('Tagged template string', function() {
  const {begin, end, reset, yellow} = ansiCode;
  it('wraps given string with ansicode', function() {
    const str = 'You can make color with tagged template string also';
    const yellowStr = ansi.yellow`${str}`;
    assert.ok(yellowStr.startsWith(begin + yellow + end + str[0]));
    assert.ok(yellowStr.endsWith(str.slice(-1) + begin + reset + end));
  });
});

describe('Block style', function() {
  it('prints color text block', function() {
    const {begin, end, reset, yellow} = ansiCode;
    assert.strictEqual(ansi.yellow.toString(), begin + yellow + end);
    assert.strictEqual(ansi.reset.toString(), begin + reset + end);
    if (false) {  // eslint-disable-line no-constant-condition
      /* Examples of usage */
      console.log("Here's normal text");
      console.log(ansi.yellow + 'You can make block of yello colored text');
      console.log('like this.');
      console.log('Hello world' + ansi.reset);

      console.log("Now it's back normal text again");

      ansi.red.stdout();
      console.log('You can make block of red colored text');
      console.log('like this.');
      console.log('Hello world');
      ansi.reset.stdout();

      console.log("Now it's normal text again");
    }
  });
});

describe('Destructured properties', function() {
  it('behave same as properties via root of module', function() {
    const {red} = ansi;
    const str = 'hello';

    // It MUST be tested with twice call.
    assert.strictEqual(ansi.red(str), red(str));
    assert.strictEqual(ansi.red(str), red(str));

    assert.strictEqual(ansi.red(str), red`${str}`);
    assert.strictEqual(ansi.red(str), red`${str}`);
  });
});

# npm-ansi
NPM module for terminal ANSI support
Purpose of this module is make it easy to use [terminal ANSI](https://en.wikipedia.org/wiki/ANSI_escape_code) in JavaScript.

# Install
```sh
npm install ansi-string
```

# Usage
 All following examples assume that 'ansi-string' module is imported as below. And, **all properties can be chained**.
```JavaScript
const ansi = require('ansi-string');
````
## Wrap string with ANSI code
 * Print "hello world" in red stylic
```JavaScript
console.log(ansi.red.italic('hello italic red string'));
```

## Tagged Template String
```JavaScript
console.log(ansi.red.italic`hello italic red string`);
```

## Make or print ANSI code by itself
 * Make itself as ANSI code string (**Make it use .toString() method**)
```JavaScript
console.log(ansi.red + 'This string is in red');
console.log('And, next string as well' + ansi.reset);
```
 * Print ANSI code by itself ("stderr" works as well)
```JavaScript
ansi.red.stdout();
console.log('This string is in red');
console.log('And, next string as well');
ansi.reset.stdout();
```

# Available properties (attributes)
 **Some of theses may not working as terminal is not support**
## Reset all attributes
* `clear`
* `normal`
* `reset`
## Decorate String
* `bold`
* `faint`
* `italic`
* `underline`
* `blink`
* ``blink\_rapid``
* `reverse`
* `inverse`
* `swap`
* `conceal`
* `cross_out`
* `strike_through`

## Text color
* `black / black_dark`
* `red / red_dark`
* `green / green_dark`
* `yellow / yellow_dark`
* `blue / blue_dark`
* `magenta / magenta_dark`
* `cyna / cyna_dark`
* `white / white_dark`

## Background color
* `black_bg / black_bg_dark`
* `red_bg / red_bg_dark`
* `green_bg / green_bg_dark`
* `yellow_bg / yellow_bg_dark`
* `blue_bg / blue_bg_dark`
* `magenta_bg / magenta_bg_dark`
* `cyna_bg / cyna_bg_dark`
* `white_bg / white_bg_dark`
* `default_bg / default_bg_dark`

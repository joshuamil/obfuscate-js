# obfuscate-js

`obfuscate-js` replaces characters in a string with escape characters to hide the content from the viewer. Useful for displaying credit card numbers, social security numbers or other PII information on-screen.

## Install

```
$ npm install obfuscate-js
```


## Usage

```js
const obfuscate = require('./obfuscate-js');

let fin = '';

let options = {
  full: true,
  length: 8,
  preserve: '$,.'
};

// Replace all but the last set of characters, retainin the separator
// returns: ***-**-0000
fin += obfuscate("000-00-0000", "-") + "\n";

// Replace all but the last set of characters, retaining the separator, but uses
// a hash/number symbol instead of an asterisk
// returns: ###-##-0000
fin += obfuscate("000-00-0000", "-", {character: '#'}) + "\n";

// Replace all characters in the string, but retain the separator
// returns: ***-**-****
fin += obfuscate("000-00-0000", "-", {full: true}) + "\n";

// Replace all characters in the string, including special characters
// returns: ********
fin += obfuscate("$200,000.00", "", {full: true}) + "\n";

// Replace all characters in the string, but preserve some formatting chars
// returns: ********
fin += obfuscate("$200,000.00", ",", options) + "\n";

// Return 8 escape characters instead of an empty string
// returns: ********
fin += obfuscate("", "", options) + "\n";

console.log(fin);
```

## Parameters

`obfuscate-js` accepts the following parameters.

### string (String = '')
The string value you wish to obfuscate or mask from the viewer.

### separator (String = '')
The string value you wish to retain or that separates groups of characters.

### Options Collection (Object = {})
Object defining additional parameters that overwrite the default behaviors of the formatter.

#### full (Boolean = false)
Boolean value (defaults to false) indicating whether or not to replace the entire string or all but the last set.

#### length (Number = 8)
Numeric value (defaults to 8 [eight]) indicating the number of characters to return if the string is empty.

#### preserve (String = '')
String values which you want to preserve in the final, formatted string. Include all characters you want to preserve with no spaces between. (e.g.: '$,.').

#### character (String = '*')
String value which will replace the current characters in the value parameter. Defaults to an asterisk.

## license

ISC

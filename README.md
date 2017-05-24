# obfuscate-js

`obfuscate-js` replaces characters in a string with escape characters to hide the content from the viewer. Useful for displaying credit card numbers, social security numbers or other PII information on-screen.

## Install

```
$ npm install obfuscate-js
```


## Usage

```js
var obfuscate = require("obfuscate");

// Replace all but the last set of characters, retainin the separator
// returns: ***-**-0000
obfuscate("000-00-0000", "-", false);

// Replace all characters in the string, but retain the separator
// returns: ***-**-****
obfuscate("000-00-0000", "-", true);

// Replace all characters in the string
// returns: ********
obfuscate("$200,000", "", true);

// Return 8 escape characters instead of the empty string
// returns: ********
obfuscate("", "", true, 8);
```

## Options

`obfuscate-js` accepts the following parameters.

### string (String = '')
The string value you wish to obfuscate or mask from the viewer.

### separator (String = '')
The string value you wish to retain or that separates groups of characters.

### full (Boolean = false)
Boolean value (defaults to false) indicating whether or not to replace the entire string or all but the last set.

### length (Number = 8)
Numeric value (defaults to 8 [eight]) indicating the number of characters to return if the string is empty.

## license

ISC

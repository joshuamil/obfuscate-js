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

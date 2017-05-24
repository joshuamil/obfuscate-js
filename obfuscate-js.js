'use strict';

module.exports = function (value = '', separator = '', options = null) {
  let fin = '';
  let defaults = {
    full: false,
    length: 8,
    preserve: '',
    character: '*'
  };

  // Overwrite defaults with user-defined options
  if (options) {
    for(let key in options) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key];
      }
    }
  }

  // If we're doing a full replacement, but also have a separator defined
  // but don't have a preserve defined, then use separator as the preserve value
  if (separator !== '' && defaults.preserve === '' && defaults.full) {
    defaults.preserve = separator;
  }

  // If there's no value, do a full replace
  if (!value || value.length <= 0) {
    fin = defaults.character.repeat(parseInt(defaults.length, 10));

  // If this is a full replacement, then first check for preserved values
  // and then replace
  } else if (defaults.full && value && value.length > 0) {
    if (defaults.hasOwnProperty('preserve') && defaults.preserve !== '') {
      let re = new RegExp('[^' + defaults.preserve + ']', 'g');
      fin = value.replace(re, defaults.character);
    } else {
      fin = defaults.character.repeat(value.length);
    }

  // If this is a replacement based on separators, then flip through each item
  // in the collection and replace until we hit the final item
  } else {
    let parts = value.split(separator);
    parts.forEach((part, idx) => {
      if (idx < (parts.length-1)) {
        fin += defaults.character.repeat(part.length) + separator;
      } else {
        fin += part;
      }
    });

  }

  return fin;
};

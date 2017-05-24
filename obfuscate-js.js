module.exports = exports = abbrev.obfuscate = obfuscate

function obfuscate (value, separator = '', full = false, length = 8) {
  let fin = '';
  if (!value || value.length <= 0) {
    fin = '*'.repeat(length);
  } else if (full && value && value.length > 0) {
    fin = '*'.repeat(value.length);
  } else {
    let parts = value.split(separator);
    parts.forEach((part, idx) => {
      if (idx < (parts.length-1)) {
        fin += '*'.repeat(part.length) + separator;
      } else {
        fin += part;
      }
    });
  }
  return fin;
};

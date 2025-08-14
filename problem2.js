function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str != 'string') {
    return 'Invalid';
  }
  const removeSpaces = str.replaceAll(' ', '');
  const upperCase = removeSpaces.toUpperCase();
  return upperCase;
}

const output = onlyCharacter(true);
console.log(output);

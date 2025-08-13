function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str != 'string') {
    return 'Invalid'
  }
  const removeSpaces = str.replace(/\s/g, '');
  const upperCase = removeSpaces.toUpperCase();
  return upperCase;
}
const output = onlyCharacter(' ha ck m e 1 @ru.c  n  ');
console.log(output);
function totalFine(fare) {
  // You have to write your code here
  if (typeof fare != 'number' || fare <= 0) {
    return 'Invalid';
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str != 'string') {
    return 'Invalid';
  }
  const removeSpaces = str.replaceAll(' ', '');
  const upperCase = removeSpaces.toUpperCase();
  return upperCase;
}

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return 'Invalid';
  }
  const team1 = Object.values(player1);
  const team2 = Object.values(player2);
  let sum1 = 0;
  let sum2 = 0;
  for (const team of team1) {
    if (typeof team === 'number') {
      sum1 += team;
    }
  }
  for (const team of team2) {
    if (typeof team === 'number') {
      sum2 += team;
    }
  }
  if (sum1 > sum2) {
    return player2.name;
  } else if (sum1 < sum2) {
    return player1.name;
  } else {
    return 'Tie';
  }
}

function isSame(arr1, arr2) {
  // You have to write your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Invalid';
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
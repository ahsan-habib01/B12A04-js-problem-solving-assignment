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

const best2 = bestTeam(
  { name: 'Brazil', foul: 5, cardY: 1, cardR: 0 },
  { name: 'Argentina', foul: 7, cardY: 0, cardR: 0 }
);
console.log(best2);
